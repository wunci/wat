module.exports = {
  runtimeCompiler: true,
  outputDir: 'lib',
  pages: {
    index: {
      entry: 'docs/main.js',
    },
  },
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        preventExtract: true,
        raw: true,
        preprocess: function(MarkdownIt, Source) {
          MarkdownIt.renderer.rules.table_open = function() {
            return '<div class="table-container"><table class="table">';
          };
          MarkdownIt.renderer.rules.table_close = function() {
            return '</table></div>';
          };
          return Source;
        },
        use: [],
      });
  },
};
