// 这里大家能理解吗，所谓的虚拟dom就是一个json对象，里边有类型，id，儿子。大家有什么问题吗

export default {
  "type": "div",
  "props": {
    "id": "A1",
    "children": [
      {
        "type": "div",
        "props": {
          "id": "B1",
          "children": [
            {
              "type": "div",

              "props": {
                "id": "C1"
              },
              "_owner": null,
              "_store": {}
            },
            {
              "type": "div",
              "key": null,
              "ref": null,
              "props": {
                "id": "C2"
              },
              "_owner": null,
              "_store": {}
            }
          ]
        },
        "_owner": null,
        "_store": {}
      },
      {
        "type": "div",
        "key": null,
        "ref": null,
        "props": {
          "id": "B2"
        },
        "_owner": null,
        "_store": {}
      }
    ]
  },
  "_owner": null,
  "_store": {}
}