const map = {
    "//localhost:7500/": "//wujie-micro.github.io/demo-vue/",
    "//localhost:7501/": "//wujie-micro.github.io/demo-react/",
};

export default function hostMap(host) {
    if (process.env.NODE_ENV === "production") return map[host];
    return host;
}