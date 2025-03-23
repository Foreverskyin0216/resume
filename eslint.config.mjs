import eslint from '@eslint/js'
import { defineConfigWithVueTs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import tseslint, { parser } from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'

export default [
  { ignores: ['dist'] },
  eslint.configs.recommended,
  ...defineConfigWithVueTs(),
  ...pluginVue.configs['flat/recommended'],
  ...tseslint.config(...tseslint.configs.recommended, {
    languageOptions: {
      parser: vueParser,
      parserOptions: { parser }
    },
    rules: {
      'no-undef': 'off',
      'vue/multi-word-component-names': 'off'
    }
  })
]
