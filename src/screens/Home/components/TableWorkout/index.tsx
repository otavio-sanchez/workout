import React, { useState, useEffect } from "react";

import {
  Table,
  TableRow,
  TableCol,
  TableColHead,
} from "../../../../components/table";

import { ButtonIcon } from "../../../../components/form";
import Icon from "../../../../assets/theme/icons/subtrair.svg";


import { Props } from "./types";

import { formatDate } from "../../../../utils/replace";
import { Block, ArrowIcon } from "./styles";

const Home = ({ list, removeExercise }: Props): JSX.Element => {
  const [listExercises, setListExercises] = useState([]);

  useEffect(() => {
    orderDate()
    setListExercises(list);
  }, [list]);

  const [itemActive, setItemActive] = useState({
    number: null,
    active: false,
  });

  const [dateAsc, setDateAsc] = useState(true);
  const [timeAsc, setTimeAsc] = useState(true);
  const [typeAsc, setTypeAsc] = useState(true);

  const orderTime = () => {
    setTimeAsc(!timeAsc);
    setListExercises(
      listExercises.sort((a, b) => {
        if (a.time > b.time) {
          return timeAsc ? 1 : -1;
        }
        if (a.time < b.time) {
          return timeAsc ? -1 : 1;
        }

        return 0;
      })
    );
  };

  const orderDate = () => {
    setDateAsc(!dateAsc);
    setListExercises(
      listExercises.sort((a, b) => {
        if (new Date(a.date) > new Date(b.date)) {
          return dateAsc ? 1 : -1;
        }
        if (new Date(a.date) < new Date(b.date)) {
          return dateAsc ? -1 : 1;
        }

        return 0;
      })
    );
  };

  const orderType = () => {
    setTypeAsc(!typeAsc);
    setListExercises(
      listExercises.sort((a, b) => {
        if (a.type > b.type) {
          return typeAsc ? 1 : -1;
        }
        if (a.type < b.type) {
          return typeAsc ? -1 : 1;
        }

        return 0;
      })
    );
  };

  return list.length ? (
    <Table
      header={
        <>
          <TableColHead>
            <>
              Time
              <ButtonIcon onClick={orderTime}>
                <ArrowIcon active={timeAsc} />
              </ButtonIcon>
            </>
          </TableColHead>
          <TableColHead>
            <>
              Type
              <ButtonIcon onClick={orderType}>
                <ArrowIcon  active={typeAsc} />
              </ButtonIcon>
            </>
          </TableColHead>
          <TableColHead>
            <>
              Date
              <ButtonIcon onClick={() => orderDate()}>
                <ArrowIcon  active={dateAsc} />
              </ButtonIcon>
            </>
          </TableColHead>
          <TableColHead> </TableColHead>
        </>
      }
    >
      {listExercises.map((item, index) => (
        <TableRow
          key={index}
          active={(active: boolean) =>
            setItemActive({
              number: index,
              active,
            })
          }
        >
          <TableCol>{item.time}</TableCol>
          <TableCol>{item.activities}</TableCol>
          <TableCol>{formatDate(item.date)}</TableCol>
          <TableCol>
            {itemActive.number === index ? (
              <ButtonIcon
                onClick={() => {
                  setItemActive({
                    number: null,
                    active: false,
                  });
                  removeExercise(item);
                }}
              >
                <Icon />
              </ButtonIcon>
            ) : (
              <Block />
            )}
          </TableCol>
        </TableRow>
      ))}
    </Table>
  ) : (
    <>Empty</>
  );
};

export default Home;
