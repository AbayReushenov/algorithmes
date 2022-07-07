import React, { ChangeEvent, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { Form, Row, Col, Button, Container, List as Results } from 'reactstrap';
import { Store, storeClass } from './Store/Store';
import _ from 'lodash';
import { List } from './components/List/List';
import { InputForm } from './components/InputForm/InputForm';

interface Props {
  state: Store;
}
interface StateApp {
  lenArray: number;
  min: number;
  max: number;
}
export const Application: React.FunctionComponent<Props> = observer(
  ({ state }) => {
    const { lenArray, min, max } = state;
    const initialStateApp: StateApp = {
      lenArray,
      min,
      max,
    };
    const [stateApp, setStateApp] = useState<StateApp>(initialStateApp);
    useEffect(() => {
      if (
        !_.isEqual(stateApp, {
          lenArray,
          min,
          max,
        })
      ) {
        setStateApp((prevState) => ({
          ...prevState,
          lenArray,
          min,
          max,
        }));
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lenArray, min, max]);

    const handleChange =
      (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
        const valid: boolean = event.currentTarget.validity.valid;
        if (valid) {
          const current = Number(event.currentTarget.value);
          setStateApp((prevState) => ({
            ...prevState,
            [key]: current,
          }));
        }
      };
    const submitData = () => {
      console.log('object', stateApp);
      state.setLenArray(stateApp.lenArray);
      state.setMin(stateApp.min);
      state.setMax(stateApp.max);
    };

    return (
      <>
        <Container className='bg-light border'>
          <h2 className='text-center text-md-right'>
            Поиск пар для произвольного количества элементов
          </h2>
          <h4 className='text-center text-md-right'>
            Генерация массива случайных данных по заданным параметрам
          </h4>
          <Form>
            <Row>
              <Col md={4}>
                <InputForm
                  title={'Количество элементов массива'}
                  key={'lenArray'}
                  value={stateApp.lenArray}
                  min={2}
                  onChange={handleChange('lenArray')}
                />
              </Col>
              <Col md={4}>
                <InputForm
                  title={'Минимальное значение'}
                  key={'min'}
                  value={stateApp.min}
                  onChange={handleChange('min')}
                />
              </Col>
              <Col md={4}>
                <InputForm
                  title={'Максимальное значение'}
                  key={'max'}
                  value={stateApp.max}
                  onChange={handleChange('max')}
                />
              </Col>
            </Row>

            <Button onClick={submitData}>
              Определить новый массив значений
            </Button>
          </Form>
        </Container>
        <Container className='bg-light border mg-5'>
          <h4 className='text-center text-md-right'>Данные</h4>
          <Row>
            <Col md={6}>
              <List
                list={storeClass.targetArray}
                title={'Массив случайных значений'}
              />
            </Col>
            <Col md={6}>
              <List
                list={storeClass.sortedArray}
                title={'Сортированный массив случайных значений'}
                className={'right-box'}
              />
            </Col>
          </Row>
        </Container>
        <Container className='bg-light border mg-5'>
          <h4 className='text-center text-md-right'>Количество пар</h4>
          <Row>
            <Col md={6}>
              <Results type='inline'>
                <li>
                  <h6>Линейный метод: {storeClass.resultLine.parities} пары</h6>
                  <h6>Время: {storeClass.resultLine.time} миллисекунд</h6>
                  <pre>
                    {`
const lineParity = (arr: number[]) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result + arr.slice(i + 1).filter((e) => arr[i] === e).length;
  }
  return result;
};
                  `}
                  </pre>
                </li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
              </Results>
            </Col>
            <Col md={6}>
              <List
                list={storeClass.sortedArray}
                title={'Сортированный массив случайных значений'}
                className={'right-box'}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
);
