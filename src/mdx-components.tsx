import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'
import { MDXComponents } from "mdx/types";

const themeComponents = getThemeComponents()

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...themeComponents,
        ...components
    }
}
