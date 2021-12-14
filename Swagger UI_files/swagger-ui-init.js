
window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "info": {
      "title": "Library API",
      "version": "1.0.0",
      "description": "Express API server"
    },
    "servers": [
      {
        "url": "https://dartflex-dev.ml:8887/"
      },
      {
        "url": "https://dartflex-dev:8888/"
      },
      {
        "url": "http://3.11.202.153:8888"
      },
      {
        "url": "http://localhost:8888"
      }
    ],
    "paths": {
      "/api/activity/get_nft_history/{id}": {
        "get": {
          "summary": "Returns the activity by nft",
          "responses": {
            "202": {
              "description": "The list of the activity",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Activity"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/activity/get_trading_history/{id}": {
        "get": {
          "summary": "Returns the activity by trading",
          "responses": {
            "202": {
              "description": "The list of the activity",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Activity"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/activity/get_sold_history/{id}": {
        "get": {
          "summary": "Returns the user's sold activity",
          "responses": {
            "202": {
              "description": "The list of the activity",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Activity"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/activity/get_purchased_history/{id}": {
        "get": {
          "summary": "Returns the user's purchased activity",
          "responses": {
            "202": {
              "description": "The list of the activity",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Activity"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/album/create": {
        "post": {
          "summary": "Create Album image",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "userId",
                    "imageUrl"
                  ],
                  "properties": {
                    "userId": {
                      "type": "integer",
                      "description": "The id of the user"
                    },
                    "imageUrl": {
                      "type": "string",
                      "description": "The url of image"
                    }
                  },
                  "example": {
                    "userId": 1,
                    "imageUrl": "https://ipfs.infura.io/ipfs/QmPo2KmiNp3C1yNsMAL7ELJdvUupjme7XkE1MZJkx9Unp3"
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "integer",
                    "example": 8
                  }
                }
              }
            },
            "500": {
              "description": "Error create album.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Error create album"
                  }
                }
              }
            }
          }
        }
      },
      "/api/bid/get/{id}": {
        "get": {
          "summary": "Returns the bid by id",
          "responses": {
            "202": {
              "description": "The list of the bid",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Bid"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/bid/get_by_market/{id}": {
        "get": {
          "summary": "Returns the bid by market id",
          "responses": {
            "202": {
              "description": "The list of the bid",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Bid"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/bid/get_by_user/{id}": {
        "get": {
          "summary": "Returns the bid by user id",
          "responses": {
            "202": {
              "description": "The list of the bid",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Bid"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/bid/get_active_by_user/{id}": {
        "get": {
          "summary": "Returns the bid by user id",
          "responses": {
            "202": {
              "description": "The list of the bid",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Bid"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/bid/get_offer_by_item/{id}": {
        "get": {
          "summary": "Returns the offer by item id",
          "responses": {
            "202": {
              "description": "The list of the bid",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Bid"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/bid/list_item": {
        "post": {
          "summary": "List NFT to the Marketplace",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "orderId",
                    "itemId",
                    "userId",
                    "marketId",
                    "bidAmount"
                  ],
                  "properties": {
                    "orderId": {
                      "type": "string",
                      "description": "The id of the order"
                    },
                    "itemId": {
                      "type": "string",
                      "description": "The id of the item"
                    },
                    "userId": {
                      "type": "string",
                      "description": "The id of the user"
                    },
                    "marketId": {
                      "type": "string",
                      "description": "The id of the market"
                    },
                    "bidAmount": {
                      "type": "string",
                      "description": "Bid amount"
                    }
                  },
                  "example": {
                    "itemId": 1,
                    "orderId": 1,
                    "userId": 1,
                    "marketId": 1,
                    "bidAmount": 10000000000000000
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "List item Successfuly",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "List item Successfuly, id: 8"
                  }
                }
              }
            },
            "500": {
              "description": "List item failed.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Error List Item,"
                  }
                }
              }
            }
          }
        }
      },
      "/api/bid/make_offer": {
        "post": {
          "summary": "Make an offer to item",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "orderId",
                    "itemId",
                    "userId",
                    "bidAmount"
                  ],
                  "properties": {
                    "orderId": {
                      "type": "string",
                      "description": "The id of the order"
                    },
                    "itemId": {
                      "type": "string",
                      "description": "The id of the item"
                    },
                    "userId": {
                      "type": "string",
                      "description": "The id of the user"
                    },
                    "bidAmount": {
                      "type": "string",
                      "description": "Bid amount"
                    }
                  },
                  "example": {
                    "itemId": 1,
                    "orderId": 1,
                    "userId": 1,
                    "bidAmount": 10000000000000000
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "Make offer Successfuly",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Bid offered Successfuly, id: 8"
                  }
                }
              }
            },
            "500": {
              "description": "Error Make Bid.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Error Make Bid"
                  }
                }
              }
            }
          }
        }
      },
      "/api/bid/place_bid": {
        "post": {
          "summary": "bid to the item on Auction",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "orderId",
                    "itemId",
                    "userId",
                    "marketId",
                    "bidAmount"
                  ],
                  "properties": {
                    "orderId": {
                      "type": "string",
                      "description": "The id of the order"
                    },
                    "itemId": {
                      "type": "string",
                      "description": "The id of the item"
                    },
                    "userId": {
                      "type": "string",
                      "description": "The id of the user"
                    },
                    "marketId": {
                      "type": "string",
                      "description": "The id of the market"
                    },
                    "bidAmount": {
                      "type": "string",
                      "description": "Bid amount"
                    }
                  },
                  "example": {
                    "itemId": 1,
                    "orderId": 1,
                    "userId": 1,
                    "marketId": 1,
                    "bidAmount": 10000000000000000
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "Bid Placed Successfuly",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Bid Placed Successfuly, id: 8"
                  }
                }
              }
            },
            "500": {
              "description": "Error Place Bid.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Error Place Bid"
                  }
                }
              }
            }
          }
        }
      },
      "/api/bid/withdraw_bid": {
        "post": {
          "summary": "bid to the item on Auction",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "id"
                  ],
                  "properties": {
                    "id": {
                      "type": "string",
                      "description": "The id of the bid"
                    }
                  },
                  "example": {
                    "id": 1
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "Withdraw bid successfuly",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Withdraw bid successfuly"
                  }
                }
              }
            },
            "500": {
              "description": "Error withdraw bid.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Error withdraw bid"
                  }
                }
              }
            }
          }
        }
      },
      "/api/bid/withdraw_offer": {
        "post": {
          "summary": "withdraw offer",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "id"
                  ],
                  "properties": {
                    "id": {
                      "type": "string",
                      "description": "The id of the bid"
                    }
                  },
                  "example": {
                    "id": 1
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "Withdraw offer successfuly",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Withdraw offer successfuly"
                  }
                }
              }
            },
            "500": {
              "description": "Error withdraw offer.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Error withdraw offer"
                  }
                }
              }
            }
          }
        }
      },
      "/api/bid/unlist_item": {
        "post": {
          "summary": "Accept the highest bid",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "id"
                  ],
                  "properties": {
                    "id": {
                      "type": "string",
                      "description": "The id of the bid"
                    }
                  },
                  "example": {
                    "id": 1
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "accept bid successfuly",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "accept bid successfuly"
                  }
                }
              }
            },
            "500": {
              "description": "Error accept bid.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Error accept bid"
                  }
                }
              }
            }
          }
        }
      },
      "/api/bid/accept_bid": {
        "post": {
          "summary": "Accept the highest bid",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "id",
                    "txHash"
                  ],
                  "properties": {
                    "id": {
                      "type": "string",
                      "description": "The id of the bid"
                    },
                    "txHash": {
                      "type": "string",
                      "description": "The transaction hash"
                    }
                  },
                  "example": {
                    "id": 1,
                    "txHash": "0x7a69606196659c8ffd047280106c8ad86588b28e9124cd29fcdcd3899343ab5e"
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "accept bid successfuly",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "accept bid successfuly"
                  }
                }
              }
            },
            "500": {
              "description": "Error accept bid.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Error accept bid"
                  }
                }
              }
            }
          }
        }
      },
      "/api/bid/claim_nft": {
        "post": {
          "summary": "Accept the highest bid",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "id",
                    "txHash"
                  ],
                  "properties": {
                    "id": {
                      "type": "string",
                      "description": "The id of the bid"
                    },
                    "txHash": {
                      "type": "string",
                      "description": "The transaction hash"
                    }
                  },
                  "example": {
                    "id": 1,
                    "txHash": "0x7a69606196659c8ffd047280106c8ad86588b28e9124cd29fcdcd3899343ab5e"
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "accept bid successfuly",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "accept bid successfuly"
                  }
                }
              }
            },
            "500": {
              "description": "Error accept bid.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Error accept bid"
                  }
                }
              }
            }
          }
        }
      },
      "/api/bid/accept_offer": {
        "post": {
          "summary": "Accept the highest offer",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "id",
                    "txHash"
                  ],
                  "properties": {
                    "id": {
                      "type": "string",
                      "description": "The id of the offer"
                    },
                    "txHash": {
                      "type": "string",
                      "description": "The transaction hash"
                    }
                  },
                  "example": {
                    "id": 1,
                    "txHash": "0x7a69606196659c8ffd047280106c8ad86588b28e9124cd29fcdcd3899343ab5e"
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "accept offer successfuly",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "accept offer successfuly"
                  }
                }
              }
            },
            "500": {
              "description": "Error accept offer.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Error accept offer"
                  }
                }
              }
            }
          }
        }
      },
      "/api/bid/buy": {
        "post": {
          "summary": "Buy the listed item",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "orderId",
                    "itemId",
                    "userId",
                    "marketId",
                    "bidAmount",
                    "txHash"
                  ],
                  "properties": {
                    "orderId": {
                      "type": "string",
                      "description": "The id of the order"
                    },
                    "itemId": {
                      "type": "string",
                      "description": "The id of the item"
                    },
                    "userId": {
                      "type": "string",
                      "description": "The id of the user"
                    },
                    "marketId": {
                      "type": "string",
                      "description": "The id of the market"
                    },
                    "bidAmount": {
                      "type": "string",
                      "description": "Bid amount"
                    },
                    "txHash": {
                      "type": "string",
                      "description": "The transaction hash"
                    }
                  },
                  "example": {
                    "itemId": 1,
                    "orderId": 1,
                    "userId": 1,
                    "marketId": 1,
                    "bidAmount": 10000000000000000,
                    "txHash": "0x7a69606196659c8ffd047280106c8ad86588b28e9124cd29fcdcd3899343ab5e"
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "Item successfully sold",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Item successfully sold, id: 8"
                  }
                }
              }
            },
            "500": {
              "description": "Error Buy now error.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Error Buy now error"
                  }
                }
              }
            }
          }
        }
      },
      "/api/bid/change_price": {
        "post": {
          "summary": "Change price of Auction",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "id",
                    "newPrice"
                  ],
                  "properties": {
                    "id": {
                      "type": "string",
                      "description": "The id of the market"
                    },
                    "newPrice": {
                      "type": "string",
                      "description": "New Price"
                    }
                  },
                  "example": {
                    "id": 1,
                    "newPrice": 10000000000000000
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "Change price succeed",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Change price succeed"
                  }
                }
              }
            },
            "500": {
              "description": "Error Change Price.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Error Change Price"
                  }
                }
              }
            }
          }
        }
      },
      "/api/hashtag/get/{id}": {
        "get": {
          "summary": "Returns item by id",
          "parameters": [
            {
              "in": "path",
              "name": "id",
              "schema": {
                "type": "integer"
              },
              "required": true,
              "description": "The item id"
            }
          ],
          "responses": {
            "202": {
              "description": "The list of the item",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Item"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/hashtag/get_all": {
        "get": {
          "summary": "Returns all items",
          "responses": {
            "202": {
              "description": "The list of the item",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Item"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/item/get/{id}": {
        "get": {
          "summary": "Returns item by id",
          "parameters": [
            {
              "in": "path",
              "name": "id",
              "schema": {
                "type": "integer"
              },
              "required": true,
              "description": "The item id"
            }
          ],
          "responses": {
            "202": {
              "description": "The list of the item",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Item"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/item/get_by_token_id/{id}": {
        "get": {
          "summary": "Returns item by token id",
          "parameters": [
            {
              "in": "path",
              "name": "id",
              "schema": {
                "type": "string"
              },
              "required": true,
              "description": "The nft token_id"
            }
          ],
          "responses": {
            "202": {
              "description": "The list of the item",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Item"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/item/get_by_owner/{wallet}": {
        "get": {
          "summary": "Returns item by owner wallet",
          "parameters": [
            {
              "in": "path",
              "name": "wallet",
              "schema": {
                "type": "string"
              },
              "required": true,
              "description": "The wallet address of owner"
            }
          ],
          "responses": {
            "202": {
              "description": "The list of the item",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Item"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/item/get_by_creator/{wallet}": {
        "get": {
          "summary": "Returns item by creator wallet",
          "parameters": [
            {
              "in": "path",
              "name": "wallet",
              "schema": {
                "type": "string"
              },
              "required": true,
              "description": "The wallet address of creator"
            }
          ],
          "responses": {
            "202": {
              "description": "The list of the item",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Item"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/item/get_all": {
        "get": {
          "summary": "Returns all items",
          "responses": {
            "202": {
              "description": "The list of the item",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Item"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/item/get_auction": {
        "get": {
          "summary": "Returns all items",
          "responses": {
            "202": {
              "description": "The list of the item",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Item"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/item/get_featured": {
        "get": {
          "summary": "Returns all items",
          "responses": {
            "202": {
              "description": "The list of the item",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Item"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/item/get_buynow": {
        "get": {
          "summary": "Returns all items",
          "responses": {
            "202": {
              "description": "The list of the item",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Item"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/item/get_sold": {
        "get": {
          "summary": "Returns all items",
          "responses": {
            "202": {
              "description": "The list of the item",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Item"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/user/create": {
        "post": {
          "summary": "Create a new user",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "fullname",
                    "userid",
                    "email",
                    "wallet"
                  ],
                  "properties": {
                    "id": {
                      "type": "integer",
                      "description": "The id of the user"
                    },
                    "fullname": {
                      "type": "string",
                      "description": "The full name of the user"
                    },
                    "userid": {
                      "type": "string",
                      "description": "The id of the user"
                    },
                    "email": {
                      "type": "string",
                      "description": "The email address of the user"
                    },
                    "wallet": {
                      "type": "string",
                      "description": "The wallet address of the user"
                    },
                    "overview": {
                      "type": "string",
                      "description": "The overview of the user"
                    },
                    "profile_image": {
                      "type": "string",
                      "description": "The url of the user profile image"
                    },
                    "cover_image": {
                      "type": "string",
                      "description": "The url of the user cover image"
                    }
                  },
                  "example": {
                    "fullname": "Harry Liu",
                    "userid": "harry1234",
                    "email": "harry@ideasoft.com",
                    "wallet": "0x3D0b45BCEd34dE6402cE7b9e7e37bDd0Be9424F3",
                    "overview": "Hi, I am Harry Liu, a 3D artist.",
                    "profile_image": "https://dartflex.s3.amazonaws.com/e33c005d090127ecc3be0920.jpeg",
                    "cover_image": "https://dartflex.s3.amazonaws.com/e33c005d090127ecc3be0920.jpeg"
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "The user was Successfuly created.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "User Added Successfuly, id: 8"
                  }
                }
              }
            },
            "500": {
              "description": "The user creation failed.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Error Create User, error: insert into \"users\" (\"cover_image\", \"email\", \"fullname\", \"overview\", \"profile_image\", \"userid\", \"wallet\") values ($1, $2, $3, $4, $5, $6, $7) returning \"id\" - duplicate key value violates unique constraint \"users_userid_unique\""
                  }
                }
              }
            }
          }
        }
      },
      "/api/item/update": {
        "post": {
          "summary": "Update the item",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Item"
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "The item was Successfuly update.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Data updated Successfuly, id: 8"
                  }
                }
              }
            }
          }
        }
      },
      "/api/marketplace/get/{id}": {
        "get": {
          "summary": "Returns marketplace data of id",
          "parameters": [
            {
              "in": "path",
              "name": "id",
              "schema": {
                "type": "integer"
              },
              "required": true,
              "description": "The id of the marketplace"
            }
          ],
          "responses": {
            "202": {
              "description": "The list of the marketplace",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Marketplace"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/marketplace/get_by_item/{id}": {
        "get": {
          "summary": "Returns marketplace data by item id",
          "parameters": [
            {
              "in": "path",
              "name": "id",
              "schema": {
                "type": "integer"
              },
              "required": true,
              "description": "The id of the item"
            }
          ],
          "responses": {
            "202": {
              "description": "The list of the marketplace",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Marketplace"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/marketplace/get_all": {
        "get": {
          "summary": "Returns all marketplace data",
          "responses": {
            "202": {
              "description": "The list of the marketplace",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Marketplace"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/marketplace/create": {
        "post": {
          "summary": "Create a new user",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "itemId",
                    "type",
                    "startPrice",
                    "endPrice",
                    "startTime",
                    "endTime",
                    "salesTokenContract",
                    "platfromFee"
                  ],
                  "properties": {
                    "itemId": {
                      "type": "string",
                      "description": "The id of the item"
                    },
                    "type": {
                      "type": "string",
                      "description": "The type of the sale"
                    },
                    "startPrice": {
                      "type": "string",
                      "description": "The start price of teh sale"
                    },
                    "endPrice": {
                      "type": "string",
                      "description": "The end price of the sale"
                    },
                    "startTime": {
                      "type": "string",
                      "description": "The start time of the sale"
                    },
                    "endTime": {
                      "type": "string",
                      "description": "The end time of the sale"
                    },
                    "salesTokenContract": {
                      "type": "string",
                      "description": "The address of the sales token"
                    },
                    "platfromFee": {
                      "type": "string",
                      "description": "the platform fee"
                    }
                  },
                  "example": {
                    "itemId": 1,
                    "type": "auction",
                    "startPrice": "harry@ideasoft.com",
                    "endPrice": "0x3D0b45BCEd34dE6402cE7b9e7e37bDd0Be9424F3",
                    "startTime": 1626403759,
                    "endTime": 1626403759,
                    "platfromFee": 10,
                    "salesTokenContract": 3.4849982025355386e+47
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "The item was Successfuly created.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Data Added Successfuly, id: 8"
                  }
                }
              }
            },
            "500": {
              "description": "The item creation failed.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Error Create User, error:"
                  }
                }
              }
            }
          }
        }
      },
      "/api/metadata/get/{id}": {
        "get": {
          "summary": "Get the metadata by id",
          "parameters": [
            {
              "in": "path",
              "name": "id",
              "schema": {
                "type": "integer"
              },
              "required": true,
              "description": "The metadata id"
            }
          ],
          "responses": {
            "202": {
              "description": "The list of the metadata",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Metadata"
                  }
                }
              }
            }
          }
        }
      },
      "/api/metadata/delete/{id}": {
        "get": {
          "summary": "Get the user by id",
          "parameters": [
            {
              "in": "path",
              "name": "id",
              "schema": {
                "type": "integer"
              },
              "required": true,
              "description": "The metadata id"
            }
          ],
          "responses": {
            "202": {
              "description": "Metadata successfuly deleted",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Data Deleted Successfuly"
                  }
                }
              }
            }
          }
        }
      },
      "/api/metadata/create": {
        "post": {
          "summary": "Create a new user",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "name",
                    "image",
                    "image_data",
                    "attribute",
                    "description"
                  ],
                  "properties": {
                    "name": {
                      "type": "string",
                      "description": "The name of the metadata"
                    },
                    "image": {
                      "type": "string",
                      "description": "The image url"
                    },
                    "image_data": {
                      "type": "string",
                      "description": "The image data"
                    },
                    "attribute": {
                      "type": "string",
                      "description": "Metadata attribute"
                    },
                    "description": {
                      "type": "string",
                      "description": "The description of metadata"
                    }
                  },
                  "example": {
                    "name": "New Image",
                    "image": "https://ipfs.infura.io/ipfs/QmPo2KmiNp3C1yNsMAL7ELJdvUupjme7XkE1MZJkx9Unp3",
                    "image_data": "horse image",
                    "attribute": "attribute",
                    "description": "image destription"
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "The metadata was Successfuly created.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Data Added Successfuly, id: 8"
                  }
                }
              }
            },
            "500": {
              "description": "The user creation failed.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Error Create Data, error: "
                  }
                }
              }
            }
          }
        }
      },
      "/api/metadata/update": {
        "post": {
          "summary": "Update the metadata",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Metadata"
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "The Metadata was Successfuly update.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Metadata updated Successfuly, id: 8"
                  }
                }
              }
            }
          }
        }
      },
      "/api/order/get/{id}": {
        "get": {
          "summary": "Returns order of id",
          "parameters": [
            {
              "in": "path",
              "name": "id",
              "schema": {
                "type": "integer"
              },
              "required": true,
              "description": "The id of the order"
            }
          ],
          "responses": {
            "202": {
              "description": "The list of the order",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Order"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/order/create": {
        "post": {
          "summary": "Create a new order",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "type",
                    "data",
                    "maker",
                    "makeAssetTypeClass",
                    "makeAssetTypeData",
                    "makeAssetValue",
                    "taker",
                    "takeAssetTypeClass",
                    "takeAssetTypeData",
                    "takeAssetValue",
                    "salt",
                    "start",
                    "end",
                    "signature"
                  ],
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "data type of order"
                    },
                    "data": {
                      "type": "string",
                      "description": "bytes string of order"
                    },
                    "maker": {
                      "type": "string",
                      "description": "The address of maker"
                    },
                    "makeAssetTypeClass": {
                      "type": "string",
                      "description": "The maker asset type class"
                    },
                    "makeAssetTypeData": {
                      "type": "string",
                      "description": "the maker asset type data"
                    },
                    "makeAssetValue": {
                      "type": "string",
                      "description": "The maker asset value"
                    },
                    "taker": {
                      "type": "string",
                      "description": "The address of taker"
                    },
                    "takeAssetTypeClass": {
                      "type": "string",
                      "description": "The taker asset type class"
                    },
                    "takeAssetTypeData": {
                      "type": "string",
                      "description": "The taker asset type data"
                    },
                    "takeAssetValue": {
                      "type": "string",
                      "description": "The taker asset value"
                    },
                    "salt": {
                      "type": "string",
                      "description": "The salt of order"
                    },
                    "start": {
                      "type": "string",
                      "description": "the vlaid time of order"
                    },
                    "end": {
                      "type": "string",
                      "description": "the vlaid time of order"
                    },
                    "signature": {
                      "type": "string",
                      "description": "the signature that"
                    }
                  },
                  "example": {
                    "maker": "0x3D0b45BCEd34dE6402cE7b9e7e37bDd0Be9424F3",
                    "make_asset_type_class": "0x73ad2146",
                    "make_asset_type_data": "0x0000000000000000000000006ede7f3c26975aad32a475e1021d8f6f39c89d823d0b45bced34de6402ce7b9e7e37bdd0be9424f359afba1fd8adff66932e8932",
                    "make_asset_value": "1",
                    "taker": "0x0000000000000000000000000000000000000000",
                    "take_asset_type_class": "0xaaaebeba",
                    "take_asset_type_data": "0x",
                    "take_asset_value": "10000000000000000",
                    "start": "0",
                    "end": "0",
                    "salt": "1140",
                    "dataType": "0x4c234266",
                    "data": "0x0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                    "signature": "0xbb75a794c2aa63522d6a3557eca0eaf492cb7a4e63c703abae1c63d5d1f7361b0bc01f15dbc21f244d1d83868c376a6e9b247c2584efc6c10631da97d431dc331c"
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "The order was Successfuly created.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Data Added Successfuly, id: 8"
                  }
                }
              }
            },
            "500": {
              "description": "The order creation failed.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Error Create order, error\""
                  }
                }
              }
            }
          }
        }
      },
      "/api/promotion/get_all": {
        "get": {
          "summary": "Returns all items",
          "responses": {
            "202": {
              "description": "The list of the item",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Item"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/super_admin/add_promotion": {
        "post": {
          "summary": "Add item to promotion table",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "itemId",
                    "data",
                    "signature"
                  ],
                  "properties": {
                    "itemId": {
                      "type": "string",
                      "description": "The id of the item"
                    },
                    "data": {
                      "type": "string",
                      "description": "The data that used to genearte signature"
                    },
                    "signature": {
                      "type": "string",
                      "description": "The signature string that signed by owner"
                    }
                  },
                  "example": {
                    "itemId": 1,
                    "data": "{\"types\":{\"EIP712Domain\":[{\"type\":\"string\",\"name\":\"name\"},{\"type\":\"string\",\"name\":\"version\"},{\"type\":\"uint256\",\"name\":\"chainId\"},{\"type\":\"address\",\"name\":\"verifyingContract\"}],\"Sign\":[]},\"domain\":{\"name\":\"sign\",\"version\":\"1\",\"chainId\":4,\"verifyingContract\":\"0x1e1B6E13F0eB4C570628589e3c088BC92aD4dB45\"},\"primaryType\":\"Sign\",\"message\":{}}",
                    "signature": "0xfe36964439607f1cea33f00ae8aa71f00eee1f10ed22fcfbee4a32b6428baebf2ae33eea71b223bdffa78ab3b5103274dddb7286c1928326f89de30b7fc2e95f1c"
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "Item added to promotion Successfuly",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "message": {
                        "type": "string",
                        "description": "The message of the response"
                      },
                      "id": {
                        "type": "integer",
                        "description": "the Item id"
                      }
                    },
                    "example": {
                      "message": "Item added to promotion Successfuly,",
                      "id": 1
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/super_admin/delete_promotion": {
        "post": {
          "summary": "remove item to promotion table",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "itemId",
                    "data",
                    "signature"
                  ],
                  "properties": {
                    "itemId": {
                      "type": "string",
                      "description": "The id of the item"
                    },
                    "data": {
                      "type": "string",
                      "description": "The data that used to genearte signature"
                    },
                    "signature": {
                      "type": "string",
                      "description": "The signature string that signed by owner"
                    }
                  },
                  "example": {
                    "itemId": 1,
                    "data": "{\"types\":{\"EIP712Domain\":[{\"type\":\"string\",\"name\":\"name\"},{\"type\":\"string\",\"name\":\"version\"},{\"type\":\"uint256\",\"name\":\"chainId\"},{\"type\":\"address\",\"name\":\"verifyingContract\"}],\"Sign\":[]},\"domain\":{\"name\":\"sign\",\"version\":\"1\",\"chainId\":4,\"verifyingContract\":\"0x1e1B6E13F0eB4C570628589e3c088BC92aD4dB45\"},\"primaryType\":\"Sign\",\"message\":{}}",
                    "signature": "0xfe36964439607f1cea33f00ae8aa71f00eee1f10ed22fcfbee4a32b6428baebf2ae33eea71b223bdffa78ab3b5103274dddb7286c1928326f89de30b7fc2e95f1c"
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "Item successfully removed from promotion table",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "Item successfully removed from promotion table"
                  }
                }
              }
            }
          }
        }
      },
      "/api/super_admin/ban_user": {
        "post": {
          "summary": "Ban user",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "userId",
                    "data",
                    "signature"
                  ],
                  "properties": {
                    "userId": {
                      "type": "string",
                      "description": "The id of the item"
                    },
                    "data": {
                      "type": "string",
                      "description": "The data that used to genearte signature"
                    },
                    "signature": {
                      "type": "string",
                      "description": "The signature string that signed by owner"
                    }
                  },
                  "example": {
                    "userId": 1,
                    "data": "{\"types\":{\"EIP712Domain\":[{\"type\":\"string\",\"name\":\"name\"},{\"type\":\"string\",\"name\":\"version\"},{\"type\":\"uint256\",\"name\":\"chainId\"},{\"type\":\"address\",\"name\":\"verifyingContract\"}],\"Sign\":[]},\"domain\":{\"name\":\"sign\",\"version\":\"1\",\"chainId\":4,\"verifyingContract\":\"0x1e1B6E13F0eB4C570628589e3c088BC92aD4dB45\"},\"primaryType\":\"Sign\",\"message\":{}}",
                    "signature": "0xfe36964439607f1cea33f00ae8aa71f00eee1f10ed22fcfbee4a32b6428baebf2ae33eea71b223bdffa78ab3b5103274dddb7286c1928326f89de30b7fc2e95f1c"
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "user ban successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "User successfully banned"
                  }
                }
              }
            }
          }
        }
      },
      "/api/super_admin/unban_user": {
        "post": {
          "summary": "unBan user",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "userId",
                    "data",
                    "signature"
                  ],
                  "properties": {
                    "userId": {
                      "type": "string",
                      "description": "The id of the item"
                    },
                    "data": {
                      "type": "string",
                      "description": "The data that used to genearte signature"
                    },
                    "signature": {
                      "type": "string",
                      "description": "The signature string that signed by owner"
                    }
                  },
                  "example": {
                    "userId": 1,
                    "data": "{\"types\":{\"EIP712Domain\":[{\"type\":\"string\",\"name\":\"name\"},{\"type\":\"string\",\"name\":\"version\"},{\"type\":\"uint256\",\"name\":\"chainId\"},{\"type\":\"address\",\"name\":\"verifyingContract\"}],\"Sign\":[]},\"domain\":{\"name\":\"sign\",\"version\":\"1\",\"chainId\":4,\"verifyingContract\":\"0x1e1B6E13F0eB4C570628589e3c088BC92aD4dB45\"},\"primaryType\":\"Sign\",\"message\":{}}",
                    "signature": "0xfe36964439607f1cea33f00ae8aa71f00eee1f10ed22fcfbee4a32b6428baebf2ae33eea71b223bdffa78ab3b5103274dddb7286c1928326f89de30b7fc2e95f1c"
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "user unban successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "User successfully unbanned"
                  }
                }
              }
            }
          }
        }
      },
      "/api/super_admin/ban_item": {
        "post": {
          "summary": "Ban item",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "itemId",
                    "data",
                    "signature"
                  ],
                  "properties": {
                    "itemId": {
                      "type": "string",
                      "description": "The id of the item"
                    },
                    "data": {
                      "type": "string",
                      "description": "The data that used to genearte signature"
                    },
                    "signature": {
                      "type": "string",
                      "description": "The signature string that signed by owner"
                    }
                  },
                  "example": {
                    "itemId": 1,
                    "data": "{\"types\":{\"EIP712Domain\":[{\"type\":\"string\",\"name\":\"name\"},{\"type\":\"string\",\"name\":\"version\"},{\"type\":\"uint256\",\"name\":\"chainId\"},{\"type\":\"address\",\"name\":\"verifyingContract\"}],\"Sign\":[]},\"domain\":{\"name\":\"sign\",\"version\":\"1\",\"chainId\":4,\"verifyingContract\":\"0x1e1B6E13F0eB4C570628589e3c088BC92aD4dB45\"},\"primaryType\":\"Sign\",\"message\":{}}",
                    "signature": "0xfe36964439607f1cea33f00ae8aa71f00eee1f10ed22fcfbee4a32b6428baebf2ae33eea71b223bdffa78ab3b5103274dddb7286c1928326f89de30b7fc2e95f1c"
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "item ban successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "item successfully banned"
                  }
                }
              }
            }
          }
        }
      },
      "/api/super_admin/unban_item": {
        "post": {
          "summary": "unBan item",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "itemId",
                    "data",
                    "signature"
                  ],
                  "properties": {
                    "itemId": {
                      "type": "string",
                      "description": "The id of the item"
                    },
                    "data": {
                      "type": "string",
                      "description": "The data that used to genearte signature"
                    },
                    "signature": {
                      "type": "string",
                      "description": "The signature string that signed by owner"
                    }
                  },
                  "example": {
                    "itemId": 1,
                    "data": "{\"types\":{\"EIP712Domain\":[{\"type\":\"string\",\"name\":\"name\"},{\"type\":\"string\",\"name\":\"version\"},{\"type\":\"uint256\",\"name\":\"chainId\"},{\"type\":\"address\",\"name\":\"verifyingContract\"}],\"Sign\":[]},\"domain\":{\"name\":\"sign\",\"version\":\"1\",\"chainId\":4,\"verifyingContract\":\"0x1e1B6E13F0eB4C570628589e3c088BC92aD4dB45\"},\"primaryType\":\"Sign\",\"message\":{}}",
                    "signature": "0xfe36964439607f1cea33f00ae8aa71f00eee1f10ed22fcfbee4a32b6428baebf2ae33eea71b223bdffa78ab3b5103274dddb7286c1928326f89de30b7fc2e95f1c"
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "item unban successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "item successfully banned"
                  }
                }
              }
            }
          }
        }
      },
      "/api/super_admin/burn_user": {
        "post": {
          "summary": "Burn user",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "userId",
                    "data",
                    "signature"
                  ],
                  "properties": {
                    "userId": {
                      "type": "string",
                      "description": "The id of the item"
                    },
                    "data": {
                      "type": "string",
                      "description": "The data that used to genearte signature"
                    },
                    "signature": {
                      "type": "string",
                      "description": "The signature string that signed by owner"
                    }
                  },
                  "example": {
                    "userId": 1,
                    "data": "{\"types\":{\"EIP712Domain\":[{\"type\":\"string\",\"name\":\"name\"},{\"type\":\"string\",\"name\":\"version\"},{\"type\":\"uint256\",\"name\":\"chainId\"},{\"type\":\"address\",\"name\":\"verifyingContract\"}],\"Sign\":[]},\"domain\":{\"name\":\"sign\",\"version\":\"1\",\"chainId\":4,\"verifyingContract\":\"0x1e1B6E13F0eB4C570628589e3c088BC92aD4dB45\"},\"primaryType\":\"Sign\",\"message\":{}}",
                    "signature": "0xfe36964439607f1cea33f00ae8aa71f00eee1f10ed22fcfbee4a32b6428baebf2ae33eea71b223bdffa78ab3b5103274dddb7286c1928326f89de30b7fc2e95f1c"
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "user burnt successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "User successfully burnt"
                  }
                }
              }
            }
          }
        }
      },
      "/api/super_admin/burn_item": {
        "post": {
          "summary": "Burn item",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "itemId",
                    "data",
                    "signature"
                  ],
                  "properties": {
                    "itemId": {
                      "type": "string",
                      "description": "The id of the item"
                    },
                    "data": {
                      "type": "string",
                      "description": "The data that used to genearte signature"
                    },
                    "signature": {
                      "type": "string",
                      "description": "The signature string that signed by owner"
                    }
                  },
                  "example": {
                    "itemId": 1,
                    "data": "{\"types\":{\"EIP712Domain\":[{\"type\":\"string\",\"name\":\"name\"},{\"type\":\"string\",\"name\":\"version\"},{\"type\":\"uint256\",\"name\":\"chainId\"},{\"type\":\"address\",\"name\":\"verifyingContract\"}],\"Sign\":[]},\"domain\":{\"name\":\"sign\",\"version\":\"1\",\"chainId\":4,\"verifyingContract\":\"0x1e1B6E13F0eB4C570628589e3c088BC92aD4dB45\"},\"primaryType\":\"Sign\",\"message\":{}}",
                    "signature": "0xfe36964439607f1cea33f00ae8aa71f00eee1f10ed22fcfbee4a32b6428baebf2ae33eea71b223bdffa78ab3b5103274dddb7286c1928326f89de30b7fc2e95f1c"
                  }
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "item burn successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "item successfully burnt"
                  }
                }
              }
            }
          }
        }
      },
      "/api/user/getAll": {
        "get": {
          "summary": "Returns the list of all the users",
          "responses": {
            "202": {
              "description": "The list of the users",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/User"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/api/user/get/{id}": {
        "get": {
          "summary": "Get the user by id",
          "parameters": [
            {
              "in": "path",
              "name": "id",
              "schema": {
                "type": "integer"
              },
              "required": true,
              "description": "The user id"
            }
          ],
          "responses": {
            "202": {
              "description": "The list of the users",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            }
          }
        }
      },
      "/api/user/get/wallet/{wallet}": {
        "get": {
          "summary": "Get the user by wallet",
          "parameters": [
            {
              "in": "path",
              "name": "wallet",
              "schema": {
                "type": "string"
              },
              "required": true,
              "description": "The user wallet"
            }
          ],
          "responses": {
            "202": {
              "description": "The list of the users",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            }
          }
        }
      },
      "/api/user/delete/{id}": {
        "get": {
          "summary": "Get the user by wallet",
          "parameters": [
            {
              "in": "path",
              "name": "id",
              "schema": {
                "type": "integer"
              },
              "required": true,
              "description": "The user id"
            }
          ],
          "responses": {
            "202": {
              "description": "User successfuly deleted",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "User Deleted Successfuly"
                  }
                }
              }
            }
          }
        }
      },
      "/api/user/update": {
        "post": {
          "summary": "Update the user",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            }
          },
          "responses": {
            "202": {
              "description": "The user was Successfuly update.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string",
                    "example": "User updated Successfuly, id: 8"
                  }
                }
              }
            }
          }
        }
      }
    },
    "components": {
      "schemas": {
        "Activity": {
          "type": "object",
          "required": [
            "id",
            "from",
            "to",
            "item_id",
            "market_id",
            "bid_amount",
            "sales_token_contract",
            "status"
          ],
          "properties": {
            "id": {
              "type": "integer",
              "description": "The id of the Activity"
            },
            "from": {
              "type": "string",
              "description": "The from user id"
            },
            "to": {
              "type": "string",
              "description": "The to user id"
            },
            "item_id": {
              "type": "string",
              "description": "The item id"
            },
            "market_id": {
              "type": "string",
              "description": "The id of the market"
            },
            "bid_amount": {
              "type": "string",
              "description": "The bid amount"
            },
            "sales_token_contract": {
              "type": "string",
              "description": "The bid token contract"
            },
            "status": {
              "type": "string",
              "description": "the status of the bid"
            }
          },
          "example": {
            "id": 1,
            "from": 2,
            "to": 5,
            "item_id": 1,
            "market_id": 1,
            "bid_amount": 10000000000000000,
            "sales_token_contract": "0x",
            "status": "sold"
          }
        },
        "Bid": {
          "type": "object",
          "required": [
            "id",
            "item_id",
            "order_id",
            "user_id",
            "market_id",
            "bid_amount",
            "status"
          ],
          "properties": {
            "id": {
              "type": "integer",
              "description": "The id of the Bid table"
            },
            "item_id": {
              "type": "string",
              "description": "The id of the item"
            },
            "order_id": {
              "type": "string",
              "description": "The id of the order"
            },
            "user_id": {
              "type": "string",
              "description": "The id of the user"
            },
            "market_id": {
              "type": "string",
              "description": "The id of the market"
            },
            "bid_amount": {
              "type": "string",
              "description": "The bid amount"
            },
            "status": {
              "type": "string",
              "description": "the status of the bid"
            }
          },
          "example": {
            "id": 1,
            "item_id": 1,
            "order_id": 1,
            "user_id": 1,
            "market_id": 1,
            "bid_amount": 10000000000000000,
            "status": "pending"
          }
        },
        "Item": {
          "type": "object",
          "required": [
            "id",
            "contract",
            "token_id",
            "uri",
            "creator",
            "owner",
            "royalty",
            "royalty_fee",
            "signature",
            "lazymint"
          ],
          "properties": {
            "id": {
              "type": "integer",
              "description": "The id of the item"
            },
            "contract": {
              "type": "string",
              "description": "NFT contract address"
            },
            "token_id": {
              "type": "string",
              "description": "The token id of NFT"
            },
            "uri": {
              "type": "string",
              "description": "The metadata uri of NFT"
            },
            "creator": {
              "type": "string",
              "description": "The wallet address of NFT creator"
            },
            "owner": {
              "type": "string",
              "description": "The wallet address of NFT owner"
            },
            "royalty": {
              "type": "string",
              "description": "The royalty of 2nd sale"
            },
            "royalty_fee": {
              "type": "string",
              "description": "The royalty fee"
            },
            "signature": {
              "type": "string",
              "description": "The signature by creator"
            },
            "lazymint": {
              "type": "bool",
              "description": "mint type"
            }
          },
          "example": {
            "id": 1,
            "contract": "0x6ede7f3c26975aad32a475e1021d8f6f39c89d82,",
            "tokenId": "27611000395240475944337849388924502630485855913601372222199548041408536408804,",
            "uri": "http://3.11.202.153:8888/api/metadata/get/1",
            "creator": 3.4849982025355386e+47,
            "owner": 3.4849982025355386e+47,
            "royalty": 3.4849982025355386e+47,
            "royaltyFee": 20,
            "lazymint": true,
            "signature": "0x3beb428e415be366cc06f6f65f59c9d209abdcec18d88acdec838f86d6d8088e418720f89568bbe0fffc134db19d137a216c86ae98e70c21b41eed7bb39084b81b"
          }
        },
        "Marketplace": {
          "type": "object",
          "required": [
            "id",
            "item_id",
            "type",
            "start_price",
            "end_price",
            "platform_fee",
            "sales_token_contract",
            "sold"
          ],
          "properties": {
            "id": {
              "type": "integer",
              "description": "The id of the marketplace"
            },
            "item_id": {
              "type": "string",
              "description": "the id of the item"
            },
            "type": {
              "type": "string",
              "description": "The type of the sale"
            },
            "start_price": {
              "type": "string",
              "description": "The start price of the sale"
            },
            "end_price": {
              "type": "string",
              "description": "Max purchase price of the sale"
            },
            "start_time": {
              "type": "string",
              "description": "The start time of the sale"
            },
            "end_time": {
              "type": "string",
              "description": "The end time of the sale"
            },
            "platform_fee": {
              "type": "string",
              "description": "The platform fee of each transaction"
            },
            "sales_token_contract": {
              "type": "string",
              "description": "The address of sales token contract"
            },
            "sold": {
              "type": "bool",
              "description": "The boolean of the sales status"
            }
          },
          "example": {
            "id": 1,
            "item_id": 1,
            "type": "Auction",
            "start_price": "harry@ideasoft.com",
            "end_price": "0x3D0b45BCEd34dE6402cE7b9e7e37bDd0Be9424F3",
            "start_time": 1626403759,
            "end_time": 1626403759,
            "platform_fee": 10,
            "sales_token_contract": 3.4849982025355386e+47,
            "sold": false
          }
        },
        "Metadata": {
          "type": "object",
          "required": [
            "id",
            "name",
            "image",
            "image_data",
            "attribute",
            "description"
          ],
          "properties": {
            "id": {
              "type": "integer",
              "description": "The id of the user"
            },
            "name": {
              "type": "string",
              "description": "The name of the metadata"
            },
            "image": {
              "type": "string",
              "description": "The image url"
            },
            "image_data": {
              "type": "string",
              "description": "The image data"
            },
            "attribute": {
              "type": "string",
              "description": "Metadata attribute"
            },
            "description": {
              "type": "string",
              "description": "The description of metadata"
            }
          },
          "example": {
            "id": 1,
            "name": "New Image",
            "image": "https://ipfs.infura.io/ipfs/QmPo2KmiNp3C1yNsMAL7ELJdvUupjme7XkE1MZJkx9Unp3",
            "image_data": "horse image",
            "attribute": "attribute",
            "description": "image destription"
          }
        },
        "User": {
          "type": "object",
          "required": [
            "id",
            "fullname",
            "userid",
            "email",
            "wallet"
          ],
          "properties": {
            "id": {
              "type": "integer",
              "description": "The id of the user"
            },
            "fullname": {
              "type": "string",
              "description": "The full name of the user"
            },
            "userid": {
              "type": "string",
              "description": "The id of the user"
            },
            "email": {
              "type": "string",
              "description": "The email address of the user"
            },
            "wallet": {
              "type": "string",
              "description": "The wallet address of the user"
            },
            "overview": {
              "type": "string",
              "description": "The overview of the user"
            },
            "profile_image": {
              "type": "string",
              "description": "The url of the user profile image"
            },
            "cover_image": {
              "type": "string",
              "description": "The url of the user cover image"
            }
          },
          "example": {
            "id": 1,
            "fullname": "Harry Liu",
            "userid": "harry1234",
            "email": "harry@ideasoft.com",
            "wallet": "0x3D0b45BCEd34dE6402cE7b9e7e37bDd0Be9424F3",
            "overview": "Hi, I am Harry Liu, a 3D artist.",
            "profile_image": "https://dartflex.s3.amazonaws.com/e33c005d090127ecc3be0920.jpeg",
            "cover_image": "https://dartflex.s3.amazonaws.com/e33c005d090127ecc3be0920.jpeg"
          }
        },
        "SuperAdmin": null
      }
    },
    "tags": []
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}
