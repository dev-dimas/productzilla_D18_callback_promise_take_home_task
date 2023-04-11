const calculateWithCallback = (firstNum, secondNum, operator, callback) => {
  if (operator == 'tambah' || operator == 'add' || operator == '+') {
    callback(firstNum + secondNum);
  } else if (operator == 'kurang' || operator == 'substract' || operator == '-') {
    callback(firstNum - secondNum);
  } else if (operator == 'kali' || operator == 'multiply' || operator == '*') {
    callback(firstNum * secondNum);
  } else if (operator == 'bagi' || operator == 'divide' || operator == '/') {
    callback(firstNum / secondNum);
  } else if (operator == 'pangkat' || operator == 'power' || operator == '**') {
    callback(firstNum ** secondNum);
  } else {
    console.log('[EN] Invalid operation. [ID] Operasi tidak valid.');
  }
};

const execCalculateWithCallback = () => {
  console.log('=== Callback ===');
  let mathQuestion = '375 / 125 * 3 ** 2 - 750 + 96 * 10 * 84 / 12';
  calculateWithCallback(375, 125, '/', (result1) => {
    calculateWithCallback(result1, 3, '*', (result2) => {
      calculateWithCallback(result2, 2, '**', (result3) => {
        calculateWithCallback(result3, 750, '-', (result4) => {
          calculateWithCallback(result4, 96, '+', (result5) => {
            calculateWithCallback(result5, 10, '*', (result6) => {
              calculateWithCallback(result6, 84, '*', (result7) => {
                calculateWithCallback(result7, 12, '/', (result8) => {
                  console.log('a.', result8);
                });
              });
            });
          });
        });
      });
    });
  });

  mathQuestion = '500 - 625 / 5 + 84 / 12 * 96 / 12';
  calculateWithCallback(500, 625, '-', (result1) => {
    calculateWithCallback(result1, 5, '/', (result2) => {
      calculateWithCallback(result2, 84, '+', (result3) => {
        calculateWithCallback(result3, 12, '/', (result4) => {
          calculateWithCallback(result4, 96, '*', (result5) => {
            calculateWithCallback(result5, 12, '/', (result6) => {
              console.log('b.', result6);
            });
          });
        });
      });
    });
  });

  mathQuestion = '750 / 2 + 125 / 5 * 96 / 12 + 375 * 84';
  calculateWithCallback(750, 2, '/', (result1) => {
    calculateWithCallback(result1, 125, '+', (result2) => {
      calculateWithCallback(result2, 5, '/', (result3) => {
        calculateWithCallback(result3, 96, '*', (result4) => {
          calculateWithCallback(result4, 12, '/', (result5) => {
            calculateWithCallback(result5, 375, '+', (result6) => {
              calculateWithCallback(result6, 84, '*', (result7) => {
                console.log('c.', result7);
              });
            });
          });
        });
      });
    });
  });

  mathQuestion = '1000 - 750 / 125 - 12 + 96 * 10 * 500 / 250';
  calculateWithCallback(1000, 750, '-', (result1) => {
    calculateWithCallback(result1, 125, '/', (result2) => {
      calculateWithCallback(result2, 12, '-', (result3) => {
        calculateWithCallback(result3, 96, '+', (result4) => {
          calculateWithCallback(result4, 10, '*', (result5) => {
            calculateWithCallback(result5, 500, '*', (result6) => {
              calculateWithCallback(result6, 250, '/', (result7) => {
                console.log('d.', result7);
              });
            });
          });
        });
      });
    });
  });

  mathQuestion = '36 ** 2 / 72 + 125 * 10 - 24 * 3';
  calculateWithCallback(36, 2, '**', (result1) => {
    calculateWithCallback(result1, 72, '/', (result2) => {
      calculateWithCallback(result2, 125, '+', (result3) => {
        calculateWithCallback(result3, 10, '*', (result4) => {
          calculateWithCallback(result4, 24, '-', (result5) => {
            calculateWithCallback(result5, 3, '*', (result6) => {
              console.log('e.', result6);
            });
          });
        });
      });
    });
  });

  mathQuestion = '500 / 100 * 20 + 84 * 2 - 125 / 5';
  calculateWithCallback(500, 100, '/', (result1) => {
    calculateWithCallback(result1, 20, '*', (result2) => {
      calculateWithCallback(result2, 84, '+', (result3) => {
        calculateWithCallback(result3, 2, '*', (result4) => {
          calculateWithCallback(result4, 125, '-', (result5) => {
            calculateWithCallback(result5, 5, '/', (result6) => {
              console.log('f.', result6);
            });
          });
        });
      });
    });
  });

  mathQuestion = '375 * 2 - 750 / 25 + 1000 / 500';
  calculateWithCallback(375, 2, '*', (result1) => {
    calculateWithCallback(result1, 750, '-', (result2) => {
      calculateWithCallback(result2, 25, '/', (result3) => {
        calculateWithCallback(result3, 1000, '+', (result4) => {
          calculateWithCallback(result4, 500, '/', (result5) => {
            console.log('g.', result5);
          });
        });
      });
    });
  });

  mathQuestion = '12 * 12 * 2 - 84 + 96 ** 2';
  calculateWithCallback(12, 12, '*', (result1) => {
    calculateWithCallback(result1, 2, '*', (result2) => {
      calculateWithCallback(result2, 84, '-', (result3) => {
        calculateWithCallback(result3, 96, '+', (result4) => {
          calculateWithCallback(result4, 2, '**', (result5) => {
            console.log('h.', result5);
          });
        });
      });
    });
  });

  mathQuestion = '750 / 25 * 375 / 125 * 72 / 12 + 84 * 12';
  calculateWithCallback(750, 25, '/', (result1) => {
    calculateWithCallback(result1, 375, '*', (result2) => {
      calculateWithCallback(result2, 125, '/', (result3) => {
        calculateWithCallback(result3, 72, '*', (result4) => {
          calculateWithCallback(result4, 12, '/', (result5) => {
            calculateWithCallback(result5, 84, '+', (result6) => {
              calculateWithCallback(result6, 12, '*', (result7) => {
                console.log('i.', result7);
              });
            });
          });
        });
      });
    });
  });

  mathQuestion = '96 / 12 ** 2 + 625 / 5 - 375 * 84';
  calculateWithCallback(96, 12, '/', (result1) => {
    calculateWithCallback(result1, 2, '**', (result2) => {
      calculateWithCallback(result2, 625, '+', (result3) => {
        calculateWithCallback(result3, 5, '/', (result4) => {
          calculateWithCallback(result4, 375, '-', (result5) => {
            calculateWithCallback(result5, 84, '*', (result6) => {
              console.log('j.', result6);
            });
          });
        });
      });
    });
  });

  mathQuestion = '250 / 25 * 10 + 36 ** 2 / 72 - 125 * 10';
  calculateWithCallback(250, 25, '/', (result1) => {
    calculateWithCallback(result1, 10, '*', (result2) => {
      calculateWithCallback(result2, 36, '+', (result3) => {
        calculateWithCallback(result3, 2, '**', (result4) => {
          calculateWithCallback(result4, 72, '/', (result5) => {
            calculateWithCallback(result5, 125, '-', (result6) => {
              calculateWithCallback(result6, 10, '*', (result7) => {
                console.log('k.', result7);
              });
            });
          });
        });
      });
    });
  });

  mathQuestion = '375 / 125 * 100 + 500 / 250 * 50 - 96 * 10';
  calculateWithCallback(375, 125, '/', (result1) => {
    calculateWithCallback(result1, 100, '*', (result2) => {
      calculateWithCallback(result2, 500, '+', (result3) => {
        calculateWithCallback(result3, 250, '/', (result4) => {
          calculateWithCallback(result4, 50, '*', (result5) => {
            calculateWithCallback(result5, 96, '-', (result6) => {
              calculateWithCallback(result6, 10, '*', (result7) => {
                console.log('l.', result7);
              });
            });
          });
        });
      });
    });
  });

  mathQuestion = '750 / 25 - 375 / 125 + 96 ** 2 / 12 ** 2';
  calculateWithCallback(750, 25, '/', (result1) => {
    calculateWithCallback(result1, 375, '-', (result2) => {
      calculateWithCallback(result2, 125, '/', (result3) => {
        calculateWithCallback(result3, 96, '+', (result4) => {
          calculateWithCallback(result4, 2, '**', (result5) => {
            calculateWithCallback(result5, 12, '/', (result6) => {
              calculateWithCallback(result6, 2, '**', (result7) => {
                console.log('m.', result7);
              });
            });
          });
        });
      });
    });
  });

  mathQuestion = '1000 / 500 * 375 / 125 * 72 / 12 - 84 * 12';
  calculateWithCallback(1000, 500, '/', (result1) => {
    calculateWithCallback(result1, 375, '*', (result2) => {
      calculateWithCallback(result2, 125, '/', (result3) => {
        calculateWithCallback(result3, 72, '*', (result4) => {
          calculateWithCallback(result4, 12, '/', (result5) => {
            calculateWithCallback(result5, 84, '-', (result6) => {
              calculateWithCallback(result6, 12, '*', (result7) => {
                console.log('n.', result7);
              });
            });
          });
        });
      });
    });
  });

  mathQuestion = '96 / 12 ** 2 - 500 / 250 * 375 / 125 + 84 * 2';
  calculateWithCallback(96, 12, '/', (result1) => {
    calculateWithCallback(result1, 2, '**', (result2) => {
      calculateWithCallback(result2, 500, '-', (result3) => {
        calculateWithCallback(result3, 250, '/', (result4) => {
          calculateWithCallback(result4, 375, '*', (result5) => {
            calculateWithCallback(result5, 125, '/', (result6) => {
              calculateWithCallback(result6, 84, '+', (result7) => {
                calculateWithCallback(result7, 2, '*', (result8) => {
                  console.log('o.', result8);
                });
              });
            });
          });
        });
      });
    });
  });
};

// ========================================

const calculateWithPromise = (firstNum, secondNum, operator) => {
  const p = new Promise((resolve, reject) => {
    if (typeof firstNum != 'number' || typeof secondNum != 'number') {
      reject('Input yang dimasukkan harus bertipe data number !.', null);
    } else {
      if (operator == 'tambah' || operator == 'add' || operator == '+') {
        resolve(firstNum + secondNum);
      } else if (operator == 'kurang' || operator == 'substract' || operator == '-') {
        resolve(firstNum - secondNum);
      } else if (operator == 'kali' || operator == 'multiply' || operator == '*') {
        resolve(firstNum * secondNum);
      } else if (operator == 'bagi' || operator == 'divide' || operator == '/') {
        resolve(firstNum / secondNum);
      } else if (operator == 'pangkat' || operator == 'power' || operator == '**') {
        resolve(firstNum ** secondNum);
      } else {
        console.log('[EN] Invalid operation. [ID] Operasi tidak valid.');
      }
    }
  });
  return p;
};

const execCalculateWithPromise = () => {
  console.log('\n=== Promise Callback ===');
  Promise.all([
    calculateWithPromise(375, 125, '/')
      .then((result) => {
        return calculateWithPromise(result, 3, '*');
      })
      .then((result) => {
        return calculateWithPromise(result, 2, '**');
      })
      .then((result) => {
        return calculateWithPromise(result, 750, '-');
      })
      .then((result) => {
        return calculateWithPromise(result, 96, '+');
      })
      .then((result) => {
        return calculateWithPromise(result, 10, '*');
      })
      .then((result) => {
        return calculateWithPromise(result, 84, '*');
      })
      .then((result) => {
        return calculateWithPromise(result, 12, '/');
      }),

    calculateWithPromise(500, 625, '-')
      .then((result) => {
        return calculateWithPromise(result, 5, '/');
      })
      .then((result) => {
        return calculateWithPromise(result, 84, '+');
      })
      .then((result) => {
        return calculateWithPromise(result, 12, '/');
      })
      .then((result) => {
        return calculateWithPromise(result, 96, '*');
      })
      .then((result) => {
        return calculateWithPromise(result, 12, '/');
      }),

    calculateWithPromise(750, 2, '/')
      .then((result) => {
        return calculateWithPromise(result, 125, '+');
      })
      .then((result) => {
        return calculateWithPromise(result, 5, '/');
      })
      .then((result) => {
        return calculateWithPromise(result, 96, '*');
      })
      .then((result) => {
        return calculateWithPromise(result, 12, '/');
      })
      .then((result) => {
        return calculateWithPromise(result, 375, '+');
      })
      .then((result) => {
        return calculateWithPromise(result, 84, '*');
      }),

    calculateWithPromise(1000, 750, '-')
      .then((result) => {
        return calculateWithPromise(result, 125, '/');
      })
      .then((result) => {
        return calculateWithPromise(result, 12, '-');
      })
      .then((result) => {
        return calculateWithPromise(result, 96, '+');
      })
      .then((result) => {
        return calculateWithPromise(result, 10, '*');
      })
      .then((result) => {
        return calculateWithPromise(result, 500, '*');
      })
      .then((result) => {
        return calculateWithPromise(result, 250, '/');
      }),

    calculateWithPromise(36, 2, '**')
      .then((result) => {
        return calculateWithPromise(result, 72, '/');
      })
      .then((result) => {
        return calculateWithPromise(result, 125, '+');
      })
      .then((result) => {
        return calculateWithPromise(result, 10, '*');
      })
      .then((result) => {
        return calculateWithPromise(result, 24, '-');
      })
      .then((result) => {
        return calculateWithPromise(result, 3, '*');
      }),

    calculateWithPromise(500, 100, '/')
      .then((result) => {
        return calculateWithPromise(result, 20, '*');
      })
      .then((result) => {
        return calculateWithPromise(result, 84, '+');
      })
      .then((result) => {
        return calculateWithPromise(result, 2, '*');
      })
      .then((result) => {
        return calculateWithPromise(result, 125, '-');
      })
      .then((result) => {
        return calculateWithPromise(result, 5, '/');
      }),

    calculateWithPromise(375, 2, '*')
      .then((result) => {
        return calculateWithPromise(result, 750, '-');
      })
      .then((result) => {
        return calculateWithPromise(result, 25, '/');
      })
      .then((result) => {
        return calculateWithPromise(result, 1000, '+');
      })
      .then((result) => {
        return calculateWithPromise(result, 500, '/');
      }),

    calculateWithPromise(12, 12, '*')
      .then((result) => {
        return calculateWithPromise(result, 2, '*');
      })
      .then((result) => {
        return calculateWithPromise(result, 84, '-');
      })
      .then((result) => {
        return calculateWithPromise(result, 96, '+');
      })
      .then((result) => {
        return calculateWithPromise(result, 2, '**');
      }),

    calculateWithPromise(750, 25, '/')
      .then((result) => {
        return calculateWithPromise(result, 375, '*');
      })
      .then((result) => {
        return calculateWithPromise(result, 125, '/');
      })
      .then((result) => {
        return calculateWithPromise(result, 72, '*');
      })
      .then((result) => {
        return calculateWithPromise(result, 12, '/');
      })
      .then((result) => {
        return calculateWithPromise(result, 84, '+');
      })
      .then((result) => {
        return calculateWithPromise(result, 12, '*');
      }),

    calculateWithPromise(96, 12, '/')
      .then((result) => {
        return calculateWithPromise(result, 2, '**');
      })
      .then((result) => {
        return calculateWithPromise(result, 625, '+');
      })
      .then((result) => {
        return calculateWithPromise(result, 5, '/');
      })
      .then((result) => {
        return calculateWithPromise(result, 375, '-');
      })
      .then((result) => {
        return calculateWithPromise(result, 84, '*');
      }),

    calculateWithPromise(250, 25, '/')
      .then((result) => {
        return calculateWithPromise(result, 10, '*');
      })
      .then((result) => {
        return calculateWithPromise(result, 36, '+');
      })
      .then((result) => {
        return calculateWithPromise(result, 2, '**');
      })
      .then((result) => {
        return calculateWithPromise(result, 72, '/');
      })
      .then((result) => {
        return calculateWithPromise(result, 125, '-');
      })
      .then((result) => {
        return calculateWithPromise(result, 10, '*');
      }),

    calculateWithPromise(375, 125, '/')
      .then((result) => {
        return calculateWithPromise(result, 100, '*');
      })
      .then((result) => {
        return calculateWithPromise(result, 500, '+');
      })
      .then((result) => {
        return calculateWithPromise(result, 250, '/');
      })
      .then((result) => {
        return calculateWithPromise(result, 50, '*');
      })
      .then((result) => {
        return calculateWithPromise(result, 96, '-');
      })
      .then((result) => {
        return calculateWithPromise(result, 10, '*');
      }),

    calculateWithPromise(750, 25, '/')
      .then((result) => {
        return calculateWithPromise(result, 375, '-');
      })
      .then((result) => {
        return calculateWithPromise(result, 125, '/');
      })
      .then((result) => {
        return calculateWithPromise(result, 96, '+');
      })
      .then((result) => {
        return calculateWithPromise(result, 2, '**');
      })
      .then((result) => {
        return calculateWithPromise(result, 12, '/');
      })
      .then((result) => {
        return calculateWithPromise(result, 2, '**');
      }),

    calculateWithPromise(1000, 500, '/')
      .then((result) => {
        return calculateWithPromise(result, 375, '*');
      })
      .then((result) => {
        return calculateWithPromise(result, 125, '/');
      })
      .then((result) => {
        return calculateWithPromise(result, 72, '*');
      })
      .then((result) => {
        return calculateWithPromise(result, 12, '/');
      })
      .then((result) => {
        return calculateWithPromise(result, 84, '-');
      })
      .then((result) => {
        return calculateWithPromise(result, 12, '*');
      }),

    calculateWithPromise(96, 12, '/')
      .then((result) => {
        return calculateWithPromise(result, 2, '**');
      })
      .then((result) => {
        return calculateWithPromise(result, 500, '-');
      })
      .then((result) => {
        return calculateWithPromise(result, 250, '/');
      })
      .then((result) => {
        return calculateWithPromise(result, 375, '*');
      })
      .then((result) => {
        return calculateWithPromise(result, 125, '/');
      })
      .then((result) => {
        return calculateWithPromise(result, 84, '+');
      })
      .then((result) => {
        return calculateWithPromise(result, 2, '*');
      }),
  ])
    .then(
      ([
        result1,
        result2,
        result3,
        result4,
        result5,
        result6,
        result7,
        result8,
        result9,
        result10,
        result11,
        result12,
        result13,
        result14,
        result15,
      ]) => {
        console.log('a.', result1);
        console.log('b.', result2);
        console.log('c.', result3);
        console.log('d.', result4);
        console.log('e.', result5);
        console.log('f.', result6);
        console.log('g.', result7);
        console.log('h.', result8);
        console.log('i.', result9);
        console.log('j.', result10);
        console.log('k.', result11);
        console.log('l.', result12);
        console.log('m.', result13);
        console.log('n.', result14);
        console.log('o.', result15);
      }
    )
    .catch((err) => {
      console.log(err);
    });
};

// ========================================

const execCalculateWithAsyncAwait = () => {
  const promiseAsyncAwait1 = async () => {
    try {
      let result = await calculateWithPromise(375, 125, '/');
      result = await calculateWithPromise(result, 3, '*');
      result = await calculateWithPromise(result, 2, '**');
      result = await calculateWithPromise(result, 750, '-');
      result = await calculateWithPromise(result, 96, '+');
      result = await calculateWithPromise(result, 10, '*');
      result = await calculateWithPromise(result, 84, '*');
      result = await calculateWithPromise(result, 12, '/');
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  const promiseAsyncAwait2 = async () => {
    try {
      let result = await calculateWithPromise(500, 625, '-');
      result = await calculateWithPromise(result, 5, '/');
      result = await calculateWithPromise(result, 84, '+');
      result = await calculateWithPromise(result, 12, '/');
      result = await calculateWithPromise(result, 96, '*');
      result = await calculateWithPromise(result, 12, '/');
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  const promiseAsyncAwait3 = async () => {
    try {
      let result = await calculateWithPromise(750, 2, '/');
      result = await calculateWithPromise(result, 125, '+');
      result = await calculateWithPromise(result, 5, '/');
      result = await calculateWithPromise(result, 96, '*');
      result = await calculateWithPromise(result, 12, '/');
      result = await calculateWithPromise(result, 375, '+');
      result = await calculateWithPromise(result, 84, '*');
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  const promiseAsyncAwait4 = async () => {
    try {
      let result = await calculateWithPromise(1000, 750, '-');
      result = await calculateWithPromise(result, 125, '/');
      result = await calculateWithPromise(result, 12, '-');
      result = await calculateWithPromise(result, 96, '+');
      result = await calculateWithPromise(result, 10, '*');
      result = await calculateWithPromise(result, 500, '*');
      result = await calculateWithPromise(result, 250, '/');
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  const promiseAsyncAwait5 = async () => {
    try {
      let result = await calculateWithPromise(36, 2, '**');
      result = await calculateWithPromise(result, 72, '/');
      result = await calculateWithPromise(result, 125, '+');
      result = await calculateWithPromise(result, 10, '*');
      result = await calculateWithPromise(result, 24, '-');
      result = await calculateWithPromise(result, 3, '*');
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  const promiseAsyncAwait6 = async () => {
    try {
      let result = await calculateWithPromise(500, 100, '/');
      result = await calculateWithPromise(result, 20, '*');
      result = await calculateWithPromise(result, 84, '+');
      result = await calculateWithPromise(result, 2, '*');
      result = await calculateWithPromise(result, 125, '-');
      result = await calculateWithPromise(result, 5, '/');
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  const promiseAsyncAwait7 = async () => {
    try {
      let result = await calculateWithPromise(375, 2, '*');
      result = await calculateWithPromise(result, 750, '-');
      result = await calculateWithPromise(result, 25, '/');
      result = await calculateWithPromise(result, 1000, '+');
      result = await calculateWithPromise(result, 500, '/');
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  const promiseAsyncAwait8 = async () => {
    try {
      let result = await calculateWithPromise(12, 12, '*');
      result = await calculateWithPromise(result, 2, '*');
      result = await calculateWithPromise(result, 84, '-');
      result = await calculateWithPromise(result, 96, '+');
      result = await calculateWithPromise(result, 2, '**');
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  const promiseAsyncAwait9 = async () => {
    try {
      let result = await calculateWithPromise(750, 25, '/');
      result = await calculateWithPromise(result, 375, '*');
      result = await calculateWithPromise(result, 125, '/');
      result = await calculateWithPromise(result, 72, '*');
      result = await calculateWithPromise(result, 12, '/');
      result = await calculateWithPromise(result, 84, '+');
      result = await calculateWithPromise(result, 12, '*');
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  const promiseAsyncAwait10 = async () => {
    try {
      let result = await calculateWithPromise(96, 12, '/');
      result = await calculateWithPromise(result, 2, '**');
      result = await calculateWithPromise(result, 625, '+');
      result = await calculateWithPromise(result, 5, '/');
      result = await calculateWithPromise(result, 375, '-');
      result = await calculateWithPromise(result, 84, '*');
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  const promiseAsyncAwait11 = async () => {
    try {
      let result = await calculateWithPromise(250, 25, '/');
      result = await calculateWithPromise(result, 10, '*');
      result = await calculateWithPromise(result, 36, '+');
      result = await calculateWithPromise(result, 2, '**');
      result = await calculateWithPromise(result, 72, '/');
      result = await calculateWithPromise(result, 125, '-');
      result = await calculateWithPromise(result, 10, '*');
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  const promiseAsyncAwait12 = async () => {
    try {
      let result = await calculateWithPromise(375, 125, '/');
      result = await calculateWithPromise(result, 100, '*');
      result = await calculateWithPromise(result, 500, '+');
      result = await calculateWithPromise(result, 250, '/');
      result = await calculateWithPromise(result, 50, '*');
      result = await calculateWithPromise(result, 96, '-');
      result = await calculateWithPromise(result, 10, '*');
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  const promiseAsyncAwait13 = async () => {
    try {
      let result = await calculateWithPromise(750, 25, '/');
      result = await calculateWithPromise(result, 375, '-');
      result = await calculateWithPromise(result, 125, '/');
      result = await calculateWithPromise(result, 96, '+');
      result = await calculateWithPromise(result, 2, '**');
      result = await calculateWithPromise(result, 12, '/');
      result = await calculateWithPromise(result, 2, '**');
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  const promiseAsyncAwait14 = async () => {
    try {
      let result = await calculateWithPromise(1000, 500, '/');
      result = await calculateWithPromise(result, 375, '*');
      result = await calculateWithPromise(result, 125, '/');
      result = await calculateWithPromise(result, 72, '*');
      result = await calculateWithPromise(result, 12, '/');
      result = await calculateWithPromise(result, 84, '-');
      result = await calculateWithPromise(result, 12, '*');
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  const promiseAsyncAwait15 = async () => {
    try {
      let result = await calculateWithPromise(96, 12, '/');
      result = await calculateWithPromise(result, 2, '**');
      result = await calculateWithPromise(result, 500, '-');
      result = await calculateWithPromise(result, 250, '/');
      result = await calculateWithPromise(result, 375, '*');
      result = await calculateWithPromise(result, 125, '/');
      result = await calculateWithPromise(result, 84, '+');
      result = await calculateWithPromise(result, 2, '*');
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const calculateWithAsyncAwait = async () => {
    let result1 = await promiseAsyncAwait1();
    let result2 = await promiseAsyncAwait2();
    let result3 = await promiseAsyncAwait3();
    let result4 = await promiseAsyncAwait4();
    let result5 = await promiseAsyncAwait5();
    let result6 = await promiseAsyncAwait6();
    let result7 = await promiseAsyncAwait7();
    let result8 = await promiseAsyncAwait8();
    let result9 = await promiseAsyncAwait9();
    let result10 = await promiseAsyncAwait10();
    let result11 = await promiseAsyncAwait11();
    let result12 = await promiseAsyncAwait12();
    let result13 = await promiseAsyncAwait13();
    let result14 = await promiseAsyncAwait14();
    let result15 = await promiseAsyncAwait15();
    console.log('\n=== Async Await ===');
    console.log('a.', result1);
    console.log('b.', result2);
    console.log('c.', result3);
    console.log('d.', result4);
    console.log('e.', result5);
    console.log('f.', result6);
    console.log('g.', result7);
    console.log('h.', result8);
    console.log('i.', result9);
    console.log('j.', result10);
    console.log('k.', result11);
    console.log('l.', result12);
    console.log('m.', result13);
    console.log('n.', result14);
    console.log('o.', result15);
  };
  calculateWithAsyncAwait();
};

execCalculateWithCallback();
execCalculateWithPromise();
execCalculateWithAsyncAwait();
