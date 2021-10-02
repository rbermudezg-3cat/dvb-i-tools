

export function handleErrors(response) {
    if (!response.ok) {
        throw Error(`fetch() returned (${response.status}) "${response.statusText}"`);
    }
    return response;
}