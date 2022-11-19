import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
const clac = (value: string) => {
  return `${Number(value) / 3.75}vw`
}
export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  rules: [
    [/^fz-(\d+)$/, match => ({ 'font-size': clac(match[1]) })], // 直接class上写 fz-10之类的即可
    [/^mg-(\d+)$/, match => ({ margin: clac(match[1]) })],
    [/^mt-(\d+)$/, match => ({ 'margin-top': clac(match[1]) })],
    [/^ml-(\d+)$/, match => ({ 'margin-left': clac(match[1]) })],
    [/^mr-(\d+)$/, match => ({ 'margin-right': clac(match[1]) })],
    [/^mb-(\d+)$/, match => ({ 'margin-bottom': clac(match[1]) })],
    [/^pd-(\d+)$/, match => ({ padding: clac(match[1]) })],
    [/^pl-(\d+)$/, match => ({ 'padding-left': clac(match[1]) })],
    [/^pt-(\d+)$/, match => ({ 'padding-top': clac(match[1]) })],
    [/^pr-(\d+)$/, match => ({ 'padding-right': clac(match[1]) })],
    [/^pb-(\d+)$/, match => ({ 'padding-bottom': clac(match[1]) })],
    [/^ti-(\d+)$/, match => ({ 'text-indent': clac(match[1]) })],
    [/^width-(\d+)$/, match => ({ width: clac(match[1]) })],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
