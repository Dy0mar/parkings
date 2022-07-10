import _get from "lodash/get"

export const SUsers = (state) => _get(state, 'users.users', [])
export const SIsLoading = (state) => _get(state, 'users.isLoading', false)
