const getArguments = (func) => {
    // This regex is from require.js
    const FN_ARGS = /^function\s*[^(]*\(\s*([^)]*)\)/m;
    const args = func.toString().match(FN_ARGS)[1].split(',');
    if (args[0] === '') {
        return [];
    }
    return args;
};

class Ioc {
    constructor() {
        this.dependencies = {};
    }

    resolveDependencies(func) {
        const args = getArguments(func);
        const resolved = [];
        for (let i = 0; i < args.length; i += 1) {
            const depName = args[i].trim();
            const dep = this.dependencies[depName];
            if (!dep) {
                throw new Error(`Can't find dependency: ${depName}`);
            }
            resolved.push(this.dependencies[depName]);
        }
        return resolved;
    }

    register(qualifier, obj) {
        this.dependencies[qualifier] = obj;
    }

    get(func) {
        if (typeof func === 'string') {
            const resolved = this.dependencies[func];
            if (!resolved) {
                throw new Error(`Can't resolve ${func}`);
            }
            return resolved;
        }
        const resolvedDependencies = this.resolveDependencies(func);

        function FuncWrapper() {
            return func.apply(func, resolvedDependencies);
        }

        FuncWrapper.prototype = func.prototype;
        return new FuncWrapper();
    }
}

const ioc = new Ioc();

export default ioc;
