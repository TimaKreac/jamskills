import React from 'react';
import { Table, Space } from 'antd';

import styles from './TestTable.module.scss';

const { Column } = Table;

const data = [
  {
    key: '1',
    subtest: 'John',
    test: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
];

interface TestsTableProps {}

const TestsTable: React.FC<TestsTableProps> = () => {
  return (
    <Table dataSource={data} className={styles.table}>
      <Column title="Тест" dataIndex="test" key="test" />
      <Column title="Подтест" dataIndex="subtest" key="subtest" />
      <Column title="Отправитель" dataIndex="sender" key="sender" />
      <Column title="Приглашение" dataIndex="invite" key="invite" />
      <Column title="Завершение" dataIndex="end" key="end" />
      <Column title="Состояние" dataIndex="status" key="status" />
      <Column title="Прогресс" dataIndex="progress" key="progress" />
      <Column
        title="Действия"
        key="action"
        render={(text, record) => (
          <Space size="middle">
            <a href="/">Перейти </a>
            <a href="/">Отказ</a>
            <a href="/">Результат</a>
          </Space>
        )}
      />
    </Table>
  );
};

export default TestsTable;
