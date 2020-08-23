export const alphabetRaw = [
  ...'あいうえおかきくけこさしすせそたちつてとなにぬねの',
  ...'はひふへほまみむめもやゆよらりるれろわをん',
]
export const defaultAlphabetObj = alphabetRaw.map((val) => {
  // デフォルトでいくつか選択させておく
  // return { key: val, enabled: [...'いろはに'].includes(val) }
  return { key: val, enabled: false }
})

/**
 * @param {*[]} permutationOptions
 * @param {number} permutationLength
 * @return {*[]}
 */
export function permuteWithRepetitions(
  permutationOptions,
  permutationLength = permutationOptions.length
) {
  if (permutationLength === 1) {
    return permutationOptions.map((permutationOption) => [permutationOption])
  }

  // Init permutations array.
  const permutations = []

  // Get smaller permutations.
  const smallerPermutations = permuteWithRepetitions(
    permutationOptions,
    permutationLength - 1
  )

  // Go through all options and join it to the smaller permutations.
  permutationOptions.forEach((currentOption) => {
    smallerPermutations.forEach((smallerPermutation) => {
      permutations.push([currentOption].concat(smallerPermutation).join(''))
    })
  })

  return permutations
}
