import pluginNext from "@next/eslint-plugin-next";
import pluginReact from "eslint-plugin-react";
import pluginTypescript from "@typescript-eslint/eslint-plugin";
import pluginPrettierTypescript from "prettier/plugins/typescript";
import prettierConfig from "eslint-config-prettier";
import pluginUnusedImports from "eslint-plugin-unused-imports";
import typescriptESLintParser from "@typescript-eslint/parser";

export default [
    prettierConfig,
    {
        languageOptions: {
            parser: typescriptESLintParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                React: "writable",
            },
        },
        plugins: {
            pluginNext,
            pluginReact,
            pluginTypescript,
            pluginPrettierTypescript,
            "unused-imports": pluginUnusedImports,
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "unused-imports/no-unused-imports": "error",
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        files: [
            "**/*.js",
            "**/*.ts",
            "**.*.tsx"
        ]
    },
];
