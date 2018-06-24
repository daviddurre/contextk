module.exports = {
    "extends": [
        "airbnb",
    ],
    "plugins": ["prettier"],
    "rules": {
        "semi": 0,
        "prettier/prettier": "error",
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx"]
        }],
    }
};