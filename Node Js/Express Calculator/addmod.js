exports.add = function (req, res, vals) {
    var sum = calculate(vals);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<!DOCTYPE html>
    <html>
    <head><meta charset=\"utf-8\"/>
    <title>Calculator Web Site</title>
    <link rel="stylesheet" href="/css/main.css">
    </head>
    <body>
    <fieldset>
    <h1>${String(vals.first)} ${String(vals.operator)} ${String(vals.second)} = ${String(sum)}</h1>
    <a href="/">Another calculation</a>
    </fieldset>
    </body>
    </html> ` );
    return res.end();
};
function calculate(vals)
{
    var result=0;
    result=eval(parseInt(vals.first)+vals.operator+parseInt(vals.second));
    return result;
    
}
