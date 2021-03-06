type SupportedExtension =
    'action' |
    'ams' |
    'amscd' |
    'autoload' |
    'base' |
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

export type TexOption = {
    packages?: SupportedExtension[],
    inlineMath?: [string, string][],
    displayMath?: [string, string][],
    processEscapes?: true,      // use \$ to produce a literal dollar sign
    processEnvironments?: true, // process \begin{xxx}...\end{xxx} outside math mode
    processRefs?: true,         // process \ref{...} outside of math mode
    digits?: RegExp,
    tags?: 'all' | 'ams' | 'none',
    tagSide?: 'right' | 'left',
    tagIndent?: string,
    useLabelIds?: boolean,
    maxMacros?: number,
    maxBuffer?: number,
    baseURL?: string
}

export type SvgOption = {
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
}
