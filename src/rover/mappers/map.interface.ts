export interface Map<D, T> {
  toEntity: (data: D) => T;
}
