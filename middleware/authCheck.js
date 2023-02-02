import { parseCookies } from "nookies";

export const ssrAuthCheck = (ctx, redirect) => {

    const cookies = parseCookies(ctx); //ctx.req.header.cookie

    if (cookies.token) {

        // return true;

    } else {
        if (redirect) {
            ctx.res.writeHead(302, { Location: "/Login" + "?redirect=" + redirect });
            ctx.res.end();
            return false;
        } else {
            ctx.res.writeHead(302, {
                Location: "/Login",
            });
            ctx.res.end();
            return false;
        }
    };
};

export const authPageRequireCheck = (ctx) => {
    const cookies = parseCookies(ctx);

    if (cookies.token) {
        ctx.res.writeHead(302, {
            Location: "/",
        });
        ctx.res.end();
    }
};