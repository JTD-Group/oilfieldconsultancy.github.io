export default {
  fetch(request: Request, env: any, ctx: ExecutionContext) {
    // With [assets] configured, Cloudflare serves files from /public automatically.
    return env.ASSETS.fetch(request);
  },
};
