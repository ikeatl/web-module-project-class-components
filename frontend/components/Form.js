import React from 'react'

export default class Form extends React.Component {
  render() {
    const { submit, change, inputFieldInfo } = this.props;

    return (
      <div>
        <form onSubmit={submit}>
          <input type="text" value={inputFieldInfo} onChange={change} placeholder="what's on your todo list today?" />
          <input type="submit" />
        </form>
      </div>
    )

  }
}
