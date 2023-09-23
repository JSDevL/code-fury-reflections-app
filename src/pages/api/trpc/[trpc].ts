import { createNextApiHandler } from "@trpc/server/adapters/next";

import { env } from "@reflections/env.mjs";
import { appRouter } from "@reflections/server/api/root";
import { createTRPCContext } from "@reflections/server/api/trpc";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
          );
        }
      : undefined,
});
