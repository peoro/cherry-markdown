/**
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import MenuBase from '@/toolbars/MenuBase';

export default class Export extends MenuBase {
  constructor($cherry) {
    super($cherry);
    this.setName('export');
    this.noIcon = true;
    this.updateMarkdown = false;
    this.subMenuConfig = [
      { noIcon: true, name: '导出PDF', onclick: this.bindSubClick.bind(this, 'pdf') },
      { noIcon: true, name: '导出长图', onclick: this.bindSubClick.bind(this, 'screenShot') },
    ];
  }

  onClick(shortKey = '', type) {
    if (document.querySelector('.cherry-dropdown[name=export]')) {
      /** @type {HTMLElement}*/ (document.querySelector('.cherry-dropdown[name=export]')).style.display = 'none';
    }
    this.editor.previewer.export(type);
  }
}
