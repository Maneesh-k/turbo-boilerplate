import NodeCache from "node-cache";

const cacheStore = new NodeCache({ useClones: false })

export { cacheStore }
