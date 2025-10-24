// src/lib/actions/viewport.js

/**
 * A Svelte action that dispatches a custom 'intersect' event
 * when the node enters or leaves the top of the viewport.
 *
 * The event detail contains an `isIntersecting` boolean.
 *
 * @param {HTMLElement} node - The element to observe.
 */
export function viewport(node) {
    const observer = new IntersectionObserver(
        ([entry]) => {
            node.dispatchEvent(
                new CustomEvent('intersect', {
                    detail: { isIntersecting: entry.isIntersecting }
                })
            );
        },
        {
            root: null, // observes intersections relative to the viewport
            rootMargin: '0px 0px -100% 0px', // Creates a 1px line at the top
            threshold: 0
        }
    );

    observer.observe(node);

    return {
        destroy() {
            observer.unobserve(node);
        }
    };
}