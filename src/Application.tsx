import React, { ChangeEvent, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { Form, Row, Col, Button, Container, List as Results } from 'reactstrap';
import { Store, storeClass } from './Store/Store';
import _ from 'lodash';
import { List } from './components/List/List';
import { InputForm } from './components/InputForm/InputForm';
import { CardLine } from './components/Cards/CardLine';
import { CardTwo } from './components/Cards/CardTwo';
import { CardThree } from './components/Cards/CardThree';

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
                  keyI={'lenArray'}
                  value={stateApp.lenArray}
                  onChange={handleChange('lenArray')}
                />
              </Col>
              <Col md={4}>
                <InputForm
                  title={'Минимальное значение элемента'}
                  keyI={'min'}
                  value={stateApp.min}
                  onChange={handleChange('min')}
                />
              </Col>
              <Col md={4}>
                <InputForm
                  title={'Максимальное значение элемента'}
                  keyI={'max'}
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
                list={storeClass.sortedArray.parities}
                title={`Сортированный массив, ${storeClass.sortedArray.time.toFixed(
                  3
                )} миллисекунд`}
                className={'right-box'}
              />
            </Col>
          </Row>
        </Container>
        <Container className='bg-light border mg-5'>
          <h4 className='text-center text-md-right'>Результаты</h4>
          <Row>
            <Col md={6}>
              <Results type='inline'>
                <li>
                  <h6>
                    Линейный метод: {storeClass.resultLine.parities} пар(ы)
                  </h6>
                  <h6>
                    Время: {storeClass.resultLine.time.toFixed(3)} миллисекунд
                  </h6>
                </li>
                <hr />
                <li>
                  <h6>Метод Two: {storeClass.resultLineTwo.parities} пар(ы)</h6>
                  <h6>
                    Время: {storeClass.resultLineTwo.time.toFixed(3)}{' '}
                    миллисекунд
                  </h6>
                  <h6>
                    Быстрее в {storeClass.efficiencyRatioTargetArray} раз(а)
                  </h6>
                </li>
                <hr />
              </Results>
            </Col>
            <Col md={6}>
              <Results type='inline'>
                <li>
                  <h6>
                    Линейный метод: {storeClass.resultLineSorted.parities}{' '}
                    пар(ы)
                  </h6>
                  <h6>
                    Время: {storeClass.resultLineSorted.time.toFixed(3)}{' '}
                    миллисекунд
                  </h6>
                </li>
                <hr />
                <li>
                  <h6>
                    Метод Two: {storeClass.resultLineTwoSorted.parities} пар(ы)
                  </h6>
                  <h6>
                    Время: {storeClass.resultLineTwoSorted.time.toFixed(3)}{' '}
                    миллисекунд
                  </h6>
                  <h6>
                    Быстрее в {storeClass.efficiencyRatioSortedOneByTwo} раз(а)
                  </h6>
                </li>
                <hr />
                <li>
                  <h6>
                    Метод Three: {storeClass.resultLineThreeSorted.parities}{' '}
                    пар(ы)
                  </h6>
                  <h6>
                    Время: {storeClass.resultLineThreeSorted.time.toFixed(3)}{' '}
                    миллисекунд
                  </h6>
                  <h6>
                    Быстрее в {storeClass.efficiencyRatioSortedOneByThree}{' '}
                    раз(а)
                  </h6>
                </li>
              </Results>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={4}>
              <CardLine />
            </Col>
            <Col md={4}>
              <CardTwo />
            </Col>
            <Col md={4}>
              <CardThree />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
);
