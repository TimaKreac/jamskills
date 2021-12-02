import React, { useEffect } from 'react';
import { Table, Space, Progress } from 'antd';

import styles from './TestTable.module.scss';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { ITest } from '../../../models/ITest';
import { formatDate } from '../../../utils/date';

const { Column } = Table;

const statuses = {
  created: { value: 'Cоздано', dotColor: '#D9D9D9' },
  in_progress: { value: 'В процессе', dotColor: '#FAAD14' },
  completed: { value: 'Выполнено', dotColor: '#52C41A' },
  expired: { value: 'Отказано', dotColor: '#FF4D4F' },
} as { [key: string]: { value: string; dotColor: string } };

const TestsTable: React.FC = () => {
  const { getTests } = useActions();
  const { tests } = useTypedSelector((state) => state.test);

  useEffect(() => {
    getTests();
    // eslint-disable-next-line
  }, []);

  return (
    <Table dataSource={tests} className={styles.table}>
      <Column
        title="Тест"
        dataIndex="id"
        key="id"
        sorter={(a: ITest, b: ITest) => a.id - b.id}
      />
      <Column title="Отправитель" dataIndex="hr" key="hr" />
      <Column
        title="Приглашение"
        dataIndex="invited_at"
        key="invited_at"
        sorter={(a: ITest, b: ITest) =>
          new Date(a.invited_at).getTime() - new Date(b.invited_at).getTime()
        }
        render={(text: string) => <p>{formatDate(new Date(text))}</p>}
      />
      <Column
        title="Завершение"
        dataIndex="deadline_at"
        key="deadline_at"
        sorter={(a: ITest, b: ITest) =>
          new Date(a.deadline_at).getTime() - new Date(b.deadline_at).getTime()
        }
        render={(text: string) => <p>{formatDate(new Date(text))}</p>}
      />
      <Column
        title="Состояние"
        dataIndex="status"
        key="status"
        render={(text: string) => (
          <span className={styles.status}>
            <span style={{ background: statuses[text].dotColor }} />
            {statuses[text].value}
          </span>
        )}
        onFilter={(value, record: ITest) =>
          record.status.indexOf(value as string) === 0
        }
        filters={[
          {
            text: 'Создано',
            value: 'created',
          },
          {
            text: 'Выполнено',
            value: 'completed',
          },
        ]}
      />
      <Column
        title="Прогресс"
        dataIndex="progress"
        key="progress"
        render={() => <Progress percent={90} />}
      />
      <Column
        title="Действия"
        key="action"
        render={(text, record: ITest) => (
          <Space size="middle">
            <a href={`/test/${record.id}`}>Перейти </a>
            <a href="/">Отказ</a>
            <a href="/">Результат</a>
          </Space>
        )}
      />
    </Table>
  );
};

export default TestsTable;
