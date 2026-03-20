import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ComplaintController::index
 * @see app/Http/Controllers/ComplaintController.php:18
 * @route '/complaint'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/complaint',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ComplaintController::index
 * @see app/Http/Controllers/ComplaintController.php:18
 * @route '/complaint'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComplaintController::index
 * @see app/Http/Controllers/ComplaintController.php:18
 * @route '/complaint'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ComplaintController::index
 * @see app/Http/Controllers/ComplaintController.php:18
 * @route '/complaint'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ComplaintController::create
 * @see app/Http/Controllers/ComplaintController.php:35
 * @route '/complaint/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/complaint/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ComplaintController::create
 * @see app/Http/Controllers/ComplaintController.php:35
 * @route '/complaint/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComplaintController::create
 * @see app/Http/Controllers/ComplaintController.php:35
 * @route '/complaint/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ComplaintController::create
 * @see app/Http/Controllers/ComplaintController.php:35
 * @route '/complaint/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ComplaintController::store
 * @see app/Http/Controllers/ComplaintController.php:43
 * @route '/complaint/post'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/complaint/post',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ComplaintController::store
 * @see app/Http/Controllers/ComplaintController.php:43
 * @route '/complaint/post'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComplaintController::store
 * @see app/Http/Controllers/ComplaintController.php:43
 * @route '/complaint/post'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ComplaintController::edit
 * @see app/Http/Controllers/ComplaintController.php:75
 * @route '/complaint/{complaint}/edit'
 */
export const edit = (args: { complaint: string | number | { id: string | number } } | [complaint: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/complaint/{complaint}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ComplaintController::edit
 * @see app/Http/Controllers/ComplaintController.php:75
 * @route '/complaint/{complaint}/edit'
 */
edit.url = (args: { complaint: string | number | { id: string | number } } | [complaint: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { complaint: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { complaint: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    complaint: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        complaint: typeof args.complaint === 'object'
                ? args.complaint.id
                : args.complaint,
                }

    return edit.definition.url
            .replace('{complaint}', parsedArgs.complaint.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComplaintController::edit
 * @see app/Http/Controllers/ComplaintController.php:75
 * @route '/complaint/{complaint}/edit'
 */
edit.get = (args: { complaint: string | number | { id: string | number } } | [complaint: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ComplaintController::edit
 * @see app/Http/Controllers/ComplaintController.php:75
 * @route '/complaint/{complaint}/edit'
 */
edit.head = (args: { complaint: string | number | { id: string | number } } | [complaint: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ComplaintController::update
 * @see app/Http/Controllers/ComplaintController.php:86
 * @route '/complaint/{complaint}/update'
 */
export const update = (args: { complaint: string | number | { id: string | number } } | [complaint: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/complaint/{complaint}/update',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ComplaintController::update
 * @see app/Http/Controllers/ComplaintController.php:86
 * @route '/complaint/{complaint}/update'
 */
update.url = (args: { complaint: string | number | { id: string | number } } | [complaint: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { complaint: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { complaint: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    complaint: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        complaint: typeof args.complaint === 'object'
                ? args.complaint.id
                : args.complaint,
                }

    return update.definition.url
            .replace('{complaint}', parsedArgs.complaint.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComplaintController::update
 * @see app/Http/Controllers/ComplaintController.php:86
 * @route '/complaint/{complaint}/update'
 */
update.post = (args: { complaint: string | number | { id: string | number } } | [complaint: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ComplaintController::show
 * @see app/Http/Controllers/ComplaintController.php:64
 * @route '/complaint/{complaint}/show'
 */
export const show = (args: { complaint: string | number | { id: string | number } } | [complaint: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/complaint/{complaint}/show',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ComplaintController::show
 * @see app/Http/Controllers/ComplaintController.php:64
 * @route '/complaint/{complaint}/show'
 */
show.url = (args: { complaint: string | number | { id: string | number } } | [complaint: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { complaint: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { complaint: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    complaint: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        complaint: typeof args.complaint === 'object'
                ? args.complaint.id
                : args.complaint,
                }

    return show.definition.url
            .replace('{complaint}', parsedArgs.complaint.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ComplaintController::show
 * @see app/Http/Controllers/ComplaintController.php:64
 * @route '/complaint/{complaint}/show'
 */
show.get = (args: { complaint: string | number | { id: string | number } } | [complaint: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ComplaintController::show
 * @see app/Http/Controllers/ComplaintController.php:64
 * @route '/complaint/{complaint}/show'
 */
show.head = (args: { complaint: string | number | { id: string | number } } | [complaint: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})
const ComplaintController = { index, create, store, edit, update, show }

export default ComplaintController