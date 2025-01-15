import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetails.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/ArticleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { Skeleton } from 'shared/Skeleton/ui/Skeleton';
import { Text } from 'shared/Text';
import { Avatar } from 'shared/Avatar';
import EyeIcon from 'app/styles/assets/icons/eye.svg';
import DatePickerIcon from 'app/styles/assets/icons/calendar.svg';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';

interface ArticleDetailsProps {
  id?: string;
  className?: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

const renderBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case ArticleBlockType.TEXT:
      return (
        <ArticleTextBlockComponent
          key={block.id}
          block={block}
        />
      );
    case ArticleBlockType.CODE:
      return (
        <ArticleCodeBlockComponent
          key={block.id}
          block={block}
        />
      );
    case ArticleBlockType.IMAGE:
      return (
        <ArticleImageBlockComponent
          key={block.id}
          block={block}
        />
      );
    default:
      return null;
  }
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation('article');

  const dispatch = useAppDispatch();

  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <div className={cls.contentWrapper}>
        <Skeleton
          width={200}
          height={200}
          borderRadius="50%"
          className={cls.avatar}
        />
        <Skeleton
          width={669}
          height={31}
        />
        <Skeleton
          width={339}
          height={31}
        />
        <Skeleton
          width="100%"
          height={231}
        />
        <Skeleton
          width="100%"
          height={231}
        />
      </div>
    );
  } else if (error) {
    content = (
      <Text
        title={t('Статья не найдена')}
        align="center"
      />
    );
  } else {
    content = (
      <div className={cls.contentWrapper}>
        <Avatar
          src={article?.img}
          size={200}
          className={cls.avatar}
        />
        <Text
          title={article?.title}
          text={article?.subtitle}
          align="left"
          size="sizeL"
          tagTitle="h2"
        />
        <div>
          <div className={cls.articleInfo}>
            <EyeIcon className={cls.icon} />
            <Text text={String(article?.views)} />
          </div>
          <div className={cls.articleInfo}>
            <DatePickerIcon className={cls.icon} />
            <Text text={article?.createdAt} />
          </div>
        </div>
        {article?.blocks.map(renderBlock)}
      </div>
    );
  }

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <div className={classNames(cls.articleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});

ArticleDetails.displayName = 'ArticleDetails';
