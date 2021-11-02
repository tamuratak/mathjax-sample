export const init: (arg: ConfigArg) => Promise<MathJaxApplication>

export type TypesetArg = {
    width?: number,
    equationNumbers?: string,
    math: string,
    format: string,
    svgNode: boolean,
    state?: {
        AMS: {
            labels: { [k: string]: string },
            IDs: { [k: string]: string },
            startNumber: number
        }
    }
}

export type TypesetReturnType = {
    svgNode: {
        getAttribute: (name: string) => string,
        setAttribute: (name: string, value: string) => void,
        outerHTML: string
    }
}

type SupportedExtension =
    'action' |
    'ams' |
    'amscd' |
    'autoload' |
    'bbox' |
    'boldsymbol' |
    'braket' |
    'bussproofs' |
    'cancel' |
    'cases' |
    'centernot' |
    'color' |
    'colortbl' |
    'colorv2' |
    'configmacros' |
    'empheq' |
    'enclose' |
    'extpfeil' |
    'gensymb' |
    'html' |
    'mathtools' |
    'mhchem' |
    'newcommand' |
    'noerrors' |
    'noundefined' |
    'physics' |
    'require' |
    'setoptions' |
    'tagformat' |
    'textcomp' |
    'textmacros' |
    'unicode' |
    'upgreek' |
    'verb'

type InitArg = {
    options: {
        enableMenu?: boolean,
        skipHtmlTags?: string[],
        includeHtmlTags?: { [key: string]: string },
        ignoreHtmlClass?: string,
        processHtmlClass?: string,
        enableAssistiveMml?: boolean
    },
    loader: {
        load: string[]
    },
    tex: {
        packages?: SupportedExtension[],
        inlineMath?: [string, string][],
        displayMath?: [string, string][],
        processEscapes: true,      // use \$ to produce a literal dollar sign
        processEnvironments: true, // process \begin{xxx}...\end{xxx} outside math mode
        processRefs: true,         // process \ref{...} outside of math mode
        digits?: RegExp,
        tags?: 'all' | 'ams' | 'none',
        tagSide?: 'right' | 'left',
        tagIndent?: string,
        useLabelIds?: boolean,
        maxMacros?: number,
        maxBuffer?: number,
        baseURL?: string
    },
    svg: {
        scale?: number,
        minScale?: number,
        mtextInheritFont?: boolean,
        merrorInheritFont?: boolean,
        mathmlSpacing?: boolean,
        skipAttributes?: { [attrname: string]: boolean },
        exFactor?: number,
        displayAlign?: 'left' | 'center' | 'right',
        displayIndent?: number,
        fontCache?: 'local' | 'global' | 'none',
        internalSpeechTitles?: boolean
    },
    startup: {
        typeset: false
    }
}

type ConfigArg = {
    MathJax: {
        jax: string[],
        extensions: string[],
        showMathMenu: boolean,
        showProcessingMessages: boolean,
        messageStyle: string,
        SVG: {
            useGlobalCache: boolean
        },
        TeX: {
            extensions: string[]
        }
    }
}