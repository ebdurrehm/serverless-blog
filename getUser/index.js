module.exports = async function (context, req, userdata) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if(userdata) {
        context.res = {
            Headers: {
                "content": "application/json"
            },
            body: userdata
        }
    } else {
        context.res = {
            status: 404, /* Defaults to 200 */
            body: {
                "error": "file not found"
            }
        };
    }
   
}