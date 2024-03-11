import { elements, Layouts } from "../../imports";

const Test = () => {
  return (
    <Layouts>
      <div x-data="{open:false}" class="text-center">
        <button x-on:click="open = !open">Toggle</button>
        <span x-show="open">
          <div x-data="{ username: '<strong>MementoMori11723</strong>' }">
            <span x-html="username"></span>
          </div>
        </span>
      </div>
    </Layouts>
  );
};

export default Test;
