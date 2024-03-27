const StatusToText: Record<string, string> = {
	"100": "CONTINUE",
	"101": "SWITCHING_PROTOCOLS",
	"102": "PROCESSING",
	"103": "EARLYHINTS",
	"200": "OK",
	"201": "CREATED",
	"202": "ACCEPTED",
	"203": "NON_AUTHORITATIVE_INFORMATION",
	"204": "NO_CONTENT",
	"205": "RESET_CONTENT",
	"206": "PARTIAL_CONTENT",
	"300": "AMBIGUOUS",
	"301": "MOVED_PERMANENTLY",
	"302": "FOUND",
	"303": "SEE_OTHER",
	"304": "NOT_MODIFIED",
	"307": "TEMPORARY_REDIRECT",
	"308": "PERMANENT_REDIRECT",
	"400": "BAD_REQUEST",
	"401": "UNAUTHORIZED",
	"402": "PAYMENT_REQUIRED",
	"403": "FORBIDDEN",
	"404": "NOT_FOUND",
	"405": "METHOD_NOT_ALLOWED",
	"406": "NOT_ACCEPTABLE",
	"407": "PROXY_AUTHENTICATION_REQUIRED",
	"408": "REQUEST_TIMEOUT",
	"409": "CONFLICT",
	"410": "GONE",
	"411": "LENGTH_REQUIRED",
	"412": "PRECONDITION_FAILED",
	"413": "PAYLOAD_TOO_LARGE",
	"414": "URI_TOO_LONG",
	"415": "UNSUPPORTED_MEDIA_TYPE",
	"416": "REQUESTED_RANGE_NOT_SATISFIABLE",
	"417": "EXPECTATION_FAILED",
	"418": "I_AM_A_TEAPOT",
	"421": "MISDIRECTED",
	"422": "UNPROCESSABLE_ENTITY",
	"424": "FAILED_DEPENDENCY",
	"428": "PRECONDITION_REQUIRED",
	"429": "TOO_MANY_REQUESTS",
	"500": "INTERNAL_SERVER_ERROR",
	"501": "NOT_IMPLEMENTED",
	"502": "BAD_GATEWAY",
	"503": "SERVICE_UNAVAILABLE",
	"504": "GATEWAY_TIMEOUT",
	"505": "HTTP_VERSION_NOT_SUPPORTED"
}

const TextToStatus: Record<string, number> = {
	CONTINUE: 100,
	SWITCHING_PROTOCOLS: 101,
	PROCESSING: 102,
	EARLYHINTS: 103,
	OK: 200,
	CREATED: 201,
	ACCEPTED: 202,
	NON_AUTHORITATIVE_INFORMATION: 203,
	NO_CONTENT: 204,
	RESET_CONTENT: 205,
	PARTIAL_CONTENT: 206,
	AMBIGUOUS: 300,
	MOVED_PERMANENTLY: 301,
	FOUND: 302,
	SEE_OTHER: 303,
	NOT_MODIFIED: 304,
	TEMPORARY_REDIRECT: 307,
	PERMANENT_REDIRECT: 308,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	PAYMENT_REQUIRED: 402,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	METHOD_NOT_ALLOWED: 405,
	NOT_ACCEPTABLE: 406,
	PROXY_AUTHENTICATION_REQUIRED: 407,
	REQUEST_TIMEOUT: 408,
	CONFLICT: 409,
	GONE: 410,
	LENGTH_REQUIRED: 411,
	PRECONDITION_FAILED: 412,
	PAYLOAD_TOO_LARGE: 413,
	URI_TOO_LONG: 414,
	UNSUPPORTED_MEDIA_TYPE: 415,
	REQUESTED_RANGE_NOT_SATISFIABLE: 416,
	EXPECTATION_FAILED: 417,
	I_AM_A_TEAPOT: 418,
	MISDIRECTED: 421,
	UNPROCESSABLE_ENTITY: 422,
	FAILED_DEPENDENCY: 424,
	PRECONDITION_REQUIRED: 428,
	TOO_MANY_REQUESTS: 429,
	INTERNAL_SERVER_ERROR: 500,
	NOT_IMPLEMENTED: 501,
	BAD_GATEWAY: 502,
	SERVICE_UNAVAILABLE: 503,
	GATEWAY_TIMEOUT: 504,
	HTTP_VERSION_NOT_SUPPORTED: 505
}

export { StatusToText, TextToStatus }
