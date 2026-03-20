import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MapController::index
 * @see app/Http/Controllers/MapController.php:13
 * @route '/map'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/map',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MapController::index
 * @see app/Http/Controllers/MapController.php:13
 * @route '/map'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MapController::index
 * @see app/Http/Controllers/MapController.php:13
 * @route '/map'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MapController::index
 * @see app/Http/Controllers/MapController.php:13
 * @route '/map'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MapController::create
 * @see app/Http/Controllers/MapController.php:23
 * @route '/map/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/map/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MapController::create
 * @see app/Http/Controllers/MapController.php:23
 * @route '/map/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MapController::create
 * @see app/Http/Controllers/MapController.php:23
 * @route '/map/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MapController::create
 * @see app/Http/Controllers/MapController.php:23
 * @route '/map/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MapController::show
 * @see app/Http/Controllers/MapController.php:39
 * @route '/map/show'
 */
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/map/show',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MapController::show
 * @see app/Http/Controllers/MapController.php:39
 * @route '/map/show'
 */
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MapController::show
 * @see app/Http/Controllers/MapController.php:39
 * @route '/map/show'
 */
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MapController::show
 * @see app/Http/Controllers/MapController.php:39
 * @route '/map/show'
 */
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})
const MapController = { index, create, show }

export default MapController