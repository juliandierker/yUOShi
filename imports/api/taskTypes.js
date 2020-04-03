import { TaskFactory, NSTaskAdapter } from "@xyng/yuoshi-backend-adapter";
const { TaskTypeName } = NSTaskAdapter

for (const name in TaskTypeName) {
    if (!TaskTypeName.hasOwnProperty(name)) {
        continue;
    }

    const type = TaskTypeName[name];
    EJSON.addType(type, (json) => {
        return TaskFactory.getStaticTask(type, json)
    })
}
