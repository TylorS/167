import { Collection, Maybe } from '../'

export type Path = {
  <Z, A extends keyof Z = keyof Z>(path: [A], obj: Z): Maybe<Z[A]>
  <Z, A extends keyof Z = keyof Z, B extends keyof Z[A] = keyof Z[A]>(path: [A, B], obj: Z): Maybe<
    Z[A][B]
  >
  <
    Z,
    A extends keyof Z = keyof Z,
    B extends keyof Z[A] = keyof Z[A],
    C extends keyof Z[A][B] = keyof Z[A][B]
  >(
    path: [A, B, C],
    obj: Z
  ): Maybe<Z[A][B][C]>
  <
    Z,
    A extends keyof Z = keyof Z,
    B extends keyof Z[A] = keyof Z[A],
    C extends keyof Z[A][B] = keyof Z[A][B],
    D extends keyof Z[A][B][C] = keyof Z[A][B][C]
  >(
    path: [A, B, C, D],
    obj: Z
  ): Maybe<Z[A][B][C][D]>
  <
    Z,
    A extends keyof Z = keyof Z,
    B extends keyof Z[A] = keyof Z[A],
    C extends keyof Z[A][B] = keyof Z[A][B],
    D extends keyof Z[A][B][C] = keyof Z[A][B][C],
    E extends keyof Z[A][B][C][D] = keyof Z[A][B][C][D]
  >(
    path: [A, B, C, D, E],
    obj: Z
  ): Maybe<Z[A][B][C][D][E]>

  <A extends string>(path: [A]): <R, Z extends Collection<A, R>>(obj: Z) => R
  <A extends string, B extends string>(path: [A, B]): <
    R,
    Z extends Collection<A, Collection<B, R>>
  >(
    obj: Z
  ) => R
  <A extends string, B extends string, C extends string>(path: [A, B, C]): <
    R,
    Z extends Collection<A, Collection<B, Collection<C, R>>>
  >(
    obj: Z
  ) => Maybe<R>
  <A extends string, B extends string, C extends string, D extends string>(path: [A, B, C, D]): <
    R,
    Z extends Collection<A, Collection<B, Collection<C, Collection<D, R>>>>
  >(
    obj: Z
  ) => Maybe<R>
  <A extends string, B extends string, C extends string, D extends string, E extends string>(
    path: [A, B, C, D, E]
  ): <R, Z extends Collection<A, Collection<B, Collection<C, Collection<D, Collection<E, R>>>>>>(
    obj: Z
  ) => Maybe<R>
  <
    A extends string,
    B extends string,
    C extends string,
    D extends string,
    E extends string,
    F extends string
  >(
    path: [A, B, C, D, E, F]
  ): <
    R,
    Z extends Collection<
      A,
      Collection<B, Collection<C, Collection<D, Collection<E, Collection<F, R>>>>>
    >
  >(
    obj: Z
  ) => Maybe<R>
  <
    A extends string,
    B extends string,
    C extends string,
    D extends string,
    E extends string,
    F extends string,
    G extends string
  >(
    path: [A, B, C, D, E, F, G]
  ): <
    R,
    Z extends Collection<
      A,
      Collection<B, Collection<C, Collection<D, Collection<E, Collection<F, Collection<G, R>>>>>>
    >
  >(
    obj: Z
  ) => Maybe<R>
  <
    A extends string,
    B extends string,
    C extends string,
    D extends string,
    E extends string,
    F extends string,
    G extends string,
    H extends string
  >(
    path: [A, B, C, D, E, F, G, H]
  ): <
    R,
    Z extends Collection<
      A,
      Collection<
        B,
        Collection<C, Collection<D, Collection<E, Collection<F, Collection<G, Collection<H, R>>>>>>
      >
    >
  >(
    obj: Z
  ) => Maybe<R>

  <Z, A>(path: ArrayLike<string>, obj: Z): Maybe<A>
  <Z, A>(path: ArrayLike<string>): (obj: Z) => Maybe<A>
}
