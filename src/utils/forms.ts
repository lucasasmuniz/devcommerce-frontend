export function update(inputs: any, name: string, newValue: any) {
  return { ...inputs, [name]: { ...inputs[name], value: newValue } };
}

export function toValues(inputs: any) {
  const data: any = {};
  for (const name in inputs) {
    data[name] = inputs[name].value;
  }
  return data;
}

export function updateAll(inputs: any, newValue: any) {
  const newInputs: any = {};
  for (const name in inputs) {
    newInputs[name] = { ...inputs[name], value: newValue[name] };
  }
  return newInputs;
}

export function validade(inputs: any, name: string) {
  if (!inputs[name].validation) {
    return inputs;
  }

  const isInvalid = !inputs[name].validation(inputs[name].value);

  return {
    ...inputs,
    [name]: { ...inputs[name], invalid: isInvalid.toString() },
  };
}

export function toDirty(inputs: any, name: string) {
  return { ...inputs, [name]: { ...inputs[name], dirty: "true" } };
}

export function updateAndValidate(inputs: any, name: string, newValue: any) {
  const dataUpdated = update(inputs, name ,newValue);
  return validade(dataUpdated, name);
}

export function toDirtyAndValidate(inputs: any, name: string){
  const dataDirty = { ...inputs, [name]: { ...inputs[name], dirty: "true" } };
  return validade(dataDirty, name);
}
