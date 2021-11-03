import * as mj from 'mathjax'

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
// Load MathJax and initialize MathJax and typeset the given math
//

mj.init({
    //
    //  The MathJax configuration
    //
    options: {
        enableAssistiveMml: false
    },
    loader: {
        load: ['adaptors/liteDOM', 'tex-svg'],
        require: require
    },
    tex: {
        packages: ['base', 'autoload', 'require', 'ams', 'newcommand']
    },
    svg: {
        fontCache: 'local'
    },
    startup: {
        typeset: false
    }
}).then((MathJax) => {
    //
    //  Typeset and display the math
    //
    MathJax.tex2svgPromise('a+b', {
        display: true,
        em: 16,
        ex: 8,
        containerWidth: 80*16
    }).then((node) => {
        const adaptor = MathJax.startup.adaptor;
        let html = adaptor.innerHTML(node);
        console.log(html.replace(/<defs>/, `<defs><style>${CSS}</style>`));
    });
}).catch(err => console.log(err));