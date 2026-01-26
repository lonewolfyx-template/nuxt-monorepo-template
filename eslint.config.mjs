import antfu from '@antfu/eslint-config'

export default antfu({
    pnpm: true,
    stylistic: {
        indent: 4,
        quotes: 'single',
    },
    yaml: {
        overrides: {
            'yaml/indent': ['error', 2],
        },
    },
})
