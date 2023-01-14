const TransactionStatus = () => {
  return (
    <div>
      <h1>Transaction Statuses</h1>
      <table>
        <thead>
          <tr>
            <th>Status Code</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>0</code>
            </td>
            <td>Unknown</td>
          </tr>
          <tr>
            <td>
              <code>1</code>
            </td>
            <td>Transaction Pending - Awaiting Finalization</td>
          </tr>
          <tr>
            <td>
              <code>2</code>
            </td>
            <td>Transaction Finalized - Awaiting Execution</td>
          </tr>
          <tr>
            <td>
              <code>3</code>
            </td>
            <td>Transaction Executed - Awaiting Sealing</td>
          </tr>
          <tr>
            <td>
              <code>4</code>
            </td>
            <td>
              Transaction Sealed - Transaction Complete. At this point the
              transaction result has been committed to the blockchain.
            </td>
          </tr>
          <tr>
            <td>
              <code>5</code>
            </td>
            <td>Transaction Expired</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionStatus;
