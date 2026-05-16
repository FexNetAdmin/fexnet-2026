/**
 * FExNet SAQ Critique Worker
 *
 * Deploy to Cloudflare Workers (free tier).
 *   1. Go to https://workers.cloudflare.com → Create Worker
 *   2. Paste this file, click Deploy
 *   3. Go to Settings → Variables → Add: ANTHROPIC_API_KEY = sk-ant-...
 *   4. Copy the worker URL (e.g. https://fexnet-critique.your-subdomain.workers.dev)
 *   5. Add to GitHub repo Settings → Secrets and variables → Actions:
 *      NEXT_PUBLIC_CRITIQUE_WORKER_URL = <your worker URL>
 *      (or set it in .env.local for local dev)
 */

const SYSTEM_PROMPT = `You are an experienced ACEM Fellowship written examination marker.
You will be given an SAQ part with its mark allocation, the official model answer, and a candidate's written response.

Your job is to provide structured feedback in this exact format:

**Estimated marks: X / Y**

**What you got right:**
- [list points from the model answer that appear in the candidate's response]

**What was missing or incomplete:**
- [list model answer points not addressed, or partially addressed]

**Examiner tip:**
[one sentence of specific advice for this question type]

Be concise, specific, and constructive. Do not penalise for minor wording differences — credit the concept if it is clearly present. Use NZ/AU clinical context where relevant.`;

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response("Invalid JSON", { status: 400 });
    }

    const { question, marks, modelAnswer, userAnswer } = body;

    if (!question || !modelAnswer || !userAnswer) {
      return new Response("Missing fields", { status: 400 });
    }

    const userPrompt = `SAQ Part (${marks} ${marks === 1 ? "mark" : "marks"}):
${question}

Model answer:
${modelAnswer}

Candidate's response:
${userAnswer}`;

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 600,
          system: SYSTEM_PROMPT,
          messages: [{ role: "user", content: userPrompt }],
        }),
      });

      if (!response.ok) {
        const err = await response.text();
        return new Response(`Anthropic error: ${err}`, {
          status: response.status,
          headers: { "Access-Control-Allow-Origin": "*" },
        });
      }

      const data = await response.json();
      const feedback = data.content?.[0]?.text ?? "No feedback returned.";

      return new Response(JSON.stringify({ feedback }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (err) {
      return new Response(`Worker error: ${err.message}`, {
        status: 500,
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    }
  },
};
