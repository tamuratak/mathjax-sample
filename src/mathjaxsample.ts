import type {SvgOption, TexOption} from 'mathjax-full'
import { mathjax } from 'mathjax-full/js/mathjax.js';
import { TeX } from 'mathjax-full/js/input/tex.js';
import { SVG } from 'mathjax-full/js/output/svg.js';
import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor.js';
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html.js';
import type { LiteElement } from 'mathjax-full/js/adaptors/lite/Element';
import type { MathDocument } from 'mathjax-full/js/core/MathDocument.js';
import type { LiteDocument } from 'mathjax-full/js/adaptors/lite/Document.js';
import type { LiteText } from 'mathjax-full/js/adaptors/lite/Text.js';
import 'mathjax-full/js/input/tex/AllPackages.js';

const CSS = [
    'svg {font-size: 200%;}'
].join('');

const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);

const texOption: TexOption = {packages: ['base', 'ams', 'newcommand', 'noerrors', 'noundefined'], tags: 'ams'}
const tex = new TeX<LiteElement, LiteText, LiteDocument>(texOption);
const svgOption: SvgOption = {fontCache: 'local'}
const svg = new SVG<LiteElement, LiteText, LiteDocument>(svgOption);
const html = mathjax.document('', {InputJax: tex, OutputJax: svg}) as MathDocument<LiteElement, LiteText, LiteDocument>;

const node = html.convert('a+b \\ccc', {
    display: true,
    em: 16,
    ex: 8,
    containerWidth: 80*16
}) as LiteElement

const svgHtml = adaptor.innerHTML(node);
console.log(svgHtml.replace(/<defs>/, `<defs><style>${CSS}</style>`))
