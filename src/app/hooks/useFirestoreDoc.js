import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { dataFromSnapshot } from "../firestore/firestoreService";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../api/async/asyncReducer";

export default function useFirestoreDoc({
  query,
  data,
  deps,
  shouldExecute = true,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!shouldExecute) return;
    console.log("hey");
    dispatch(asyncActionStart());
    const unsubscribe = query().onSnapshot(
      (snapshot) => {
        if (!snapshot.exists) {
          dispatch(
            asyncActionError({
              code: "not-found",
              message: "Could not find document",
            })
          );
          return;
        }
        data(dataFromSnapshot(snapshot));
        dispatch(asyncActionFinish());
      },
      (error) => dispatch(asyncActionError())
    );
    return () => {
      unsubscribe();
    };
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}
