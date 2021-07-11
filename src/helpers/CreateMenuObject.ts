type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish'; /** Tipos de menu possíveis */

/**
 * Verifica se o menu para torná-lo ativo
 * @param activeMenu 
 * @returns 
 */
export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if (activeMenu !== '') {
        returnObject[activeMenu] = true;
    }

    return returnObject;
}