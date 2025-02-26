export type Mods = Record<string, boolean | string | undefined>;
/**
 * Функция для генерации строки классов на основе базового класса, модификаторов и дополнительных классов.
 *
 * @param {string} cls - Базовый класс.
 * @param {Mods} [mods={}] - Объект с модификаторами, где ключ - имя класса, а значение - булево значение или строка.
 * @param {Array<string | undefined>} [additional=[]] - Массив дополнительных классов.
 * @returns {string} - Сформированная строка классов.
 */
export function classNames(
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}
