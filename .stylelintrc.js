module.exports = {
  'extends': ['stylelint-config-standard', 'prettier'],
  'rules': {
    'property-case': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'mixin',
          'extend',
          'content',
          'include',
          'for',
          'function',
          'return'
        ]
      }
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export']
      }
    ],
    indentation: 2,
    'no-descending-specificity': null,
    'declaration-colon-newline-after': null
  }
  // ignoreFiles: ["**/*.js", "dist/*.*", "node_modules", "**/*.ts"],
}
