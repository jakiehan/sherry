import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types/index';
import { articleDetailsCommentReducer } from '../../model/slice/articleDetailsCommentSlice';
import { articleDetailsRecommendationsReducer } from '../../model/slice/articleDetailsRecommendationsSlice';

export const articleDetailsPageReducer =
  combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsCommentReducer,
    recommendations: articleDetailsRecommendationsReducer,
  });
