module.exports = [
    {
        id: "greeting",
        url: "/greeting",
        method: "GET",
        variants: [
            {
                id: "aGreeting",
                response: {
                    status: 200,
                    body: "mocked greeting"
                }
            }
        ]
    },
    {
        id: "proxy-all",
        url: "*",
        method: ["GET", "PUT", "PATCH", "POST"],
        variants: [
            {
                id: "real-api",
                handler: "proxy",
                host: 'http://127.0.0.1:3000'
            },
            {
                id: "disabled",
                response: (req, res, next) => next()
            }
        ]
    }
] 