import type {SvgOption, TexOption} from 'mathjax-full'
import { mathjax } from 'mathjax-full/js/mathjax.js';
import { TeX } from 'mathjax-full/js/input/tex.js';
import { SVG } from 'mathjax-full/js/output/svg.js';
import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor.js';
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html.js';
import { LiteElement } from 'mathjax-full/js/adaptors/lite/Element';
import { MathDocument } from 'mathjax-full/js/core/MathDocument';
import { LiteDocument } from 'mathjax-full/js/adaptors/lite/Document';
import { LiteText } from 'mathjax-full/js/adaptors/lite/Text';

//
//  Minimal CSS needed for stand-alone image
//
const CSS = [
    'svg a{fill:blue;stroke:blue}',
    '[data-mml-node="merror"]>g{fill:red;stroke:red}',
    '[data-mml-node="merror"]>rect[data-background]{fill:yellow;stroke:none}',
    '[data-frame],[data-line]{stroke-width:70px;fill:none}',
    '.mjx-dashed{stroke-dasharray:140}',
    '.mjx-dotted{stroke-linecap:round;stroke-dasharray:0,140}',
    'use[data-c]{stroke-width:3px}'
].join('');

//
//  Create DOM adaptor and register it for HTML documents
//
const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);
//
//  Create input and output jax and a document using them on the content from the HTML file
//
const texOption: TexOption = {packages: ['base', 'ams']}
const tex = new TeX<LiteElement, LiteText, LiteDocument>(texOption);
const svgOption: SvgOption = {fontCache: 'local'}
const svg = new SVG<LiteElement, LiteText, LiteDocument>(svgOption);
const html = mathjax.document('', {InputJax: tex, OutputJax: svg}) as MathDocument<LiteElement, LiteText, LiteDocument>;

//
//  Typeset the math from the command line
//
const node = html.convert('a+b', {
    display: true,
    em: 16,
    ex: 8,
    containerWidth: 80*16
}) as LiteElement

//
//  If the --css option was specified, output the CSS,
//  Otherwise, typeset the math and output the HTML
//

const svgHtml = adaptor.innerHTML(node);
console.log(svgHtml.replace(/<defs>/, `<defs><style>${CSS}</style>`))

