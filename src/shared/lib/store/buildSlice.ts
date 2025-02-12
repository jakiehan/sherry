import { bindActionCreators, createSlice } from '@reduxjs/toolkit';
import { SliceCaseReducers, CreateSliceOptions } from '@reduxjs/toolkit/dist';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

//**
// Функция обертка над useDispatch, для более удобной работы,
// чтобы в каждом месте приложения не прописывать "const dispatch = useDispatch"
// в хуке useActions забиндил useDispatch
// пример использования в компоненте Counter(entities/Counter)

export function buildSlice<
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string,
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
  const slice = createSlice(options);

  const useActions = (): typeof slice.actions => {
    const dispatch = useDispatch();

    return useMemo(
      () => bindActionCreators<any, any>(slice.actions, dispatch),
      [dispatch]
    );
  };

  return {
    ...slice,
    useActions,
  };
}
