import React from "react";
import { render, screen, waitFor, fireEvent } from "../../test-utils";
import { rest } from "msw";
import { setupServer } from "msw/node";
import UsersList from "./UsersList";
import i18n from "../../translations/i18n";
import { IUser } from "../../reducers/users/types";

const API_URL = process.env.REACT_APP_API_BASE_URL + "/users";

const validUsersArray: IUser[] = [
  {
    id: 1,
    name: "John",
    username: "Wick",
  },
  {
    id: 2,
    name: "Mark",
    username: "Tyson",
  },
  {
    id: 3,
    name: "Jim",
    username: "Beam",
  },
];
const invalidUsersArray: any = [
  {
    id: "Jane",
    name: "Mary",
    username: 5,
  },
  {
    id: null,
  },
];
const firstValidUserItemName = validUsersArray[0].name;
const secondValidUserItemName = validUsersArray[1].name;

const server = setupServer();
const simulateGetUsersRequest = (
  status: number = 200,
  response: any = validUsersArray
) => {
  server.use(
    rest.get(API_URL, (req, res, ctx) => {
      return res(ctx.status(status), ctx.json(response));
    })
  );
};

const emptyHtmlElement = document.createElement("empty-html-element");
let usersListTitle: HTMLElement,
  usersListSearchInput: HTMLElement,
  usersListLoading: HTMLElement,
  usersListEmptyPlaceholder: HTMLElement,
  usersListError: HTMLElement,
  usersListRefresh: HTMLElement,
  usersListFirstUserItem: HTMLElement,
  usersListSecondUserItem: HTMLElement = emptyHtmlElement;

const assignUsersListElements = () => {
  usersListTitle =
    screen.getByText(i18n.t("Users:usersListTitle").toString()) ||
    emptyHtmlElement;
  usersListSearchInput =
    screen.queryByPlaceholderText(
      i18n.t("Users:usersListSearchPlaceholder").toString()
    ) || emptyHtmlElement;
  usersListLoading =
    screen.queryByText(i18n.t("Common:loading").toString()) || emptyHtmlElement;
  usersListEmptyPlaceholder =
    screen.queryByText(i18n.t("Users:usersListEmptyPlaceholder").toString()) ||
    emptyHtmlElement;
  usersListError =
    screen.queryByText(i18n.t("Common:refetch").toString()) || emptyHtmlElement;
  usersListRefresh =
    screen.queryByText(i18n.t("Users:usersListRefresh").toString()) ||
    emptyHtmlElement;
  usersListFirstUserItem =
    screen.queryByText(firstValidUserItemName) || emptyHtmlElement;
  usersListSecondUserItem =
    screen.queryByText(secondValidUserItemName) || emptyHtmlElement;
};

const renderUsersListAndWaitForGetUsersRequest = async () => {
  render(<UsersList />);
  assignUsersListElements();
  checkUsersListElementsOnFirstRender();
  await waitForGetUsersRequest();
};

const waitForGetUsersRequest = async () => {
  await waitFor(() => expect(usersListLoading).not.toBeInTheDocument());
  assignUsersListElements();
};

const checkUsersListElementsOnFirstRender = () => {
  expect(usersListTitle).toBeInTheDocument();
  expect(usersListLoading).toBeInTheDocument();
  expect(usersListSearchInput).not.toBeInTheDocument();
  expect(usersListRefresh).not.toBeInTheDocument();
  expect(usersListEmptyPlaceholder).not.toBeInTheDocument();
  expect(usersListError).not.toBeInTheDocument();
  expect(usersListFirstUserItem).not.toBeInTheDocument();
  expect(usersListSecondUserItem).not.toBeInTheDocument();
};
const checkUsersListElementsOnValidResponse = () => {
  expect(usersListTitle).toBeInTheDocument();
  expect(usersListLoading).not.toBeInTheDocument();
  expect(usersListSearchInput).toBeInTheDocument();
  expect(usersListRefresh).toBeInTheDocument();
  expect(usersListEmptyPlaceholder).not.toBeInTheDocument();
  expect(usersListError).not.toBeInTheDocument();
  expect(usersListFirstUserItem).toBeInTheDocument();
  expect(usersListSecondUserItem).toBeInTheDocument();
};
const checkUsersListElementsOnEmptyResponse = () => {
  expect(usersListTitle).toBeInTheDocument();
  expect(usersListLoading).not.toBeInTheDocument();
  expect(usersListSearchInput).toBeInTheDocument();
  expect(usersListRefresh).toBeInTheDocument();
  expect(usersListEmptyPlaceholder).toBeInTheDocument();
  expect(usersListError).not.toBeInTheDocument();
  expect(usersListFirstUserItem).not.toBeInTheDocument();
  expect(usersListSecondUserItem).not.toBeInTheDocument();
};
const checkUsersListElementsOnInvalidResponse = () => {
  expect(usersListTitle).toBeInTheDocument();
  expect(usersListLoading).not.toBeInTheDocument();
  expect(usersListSearchInput).not.toBeInTheDocument();
  expect(usersListRefresh).not.toBeInTheDocument();
  expect(usersListEmptyPlaceholder).not.toBeInTheDocument();
  expect(usersListError).toBeInTheDocument();
  expect(usersListFirstUserItem).not.toBeInTheDocument();
  expect(usersListSecondUserItem).not.toBeInTheDocument();
};
const checkUsersListElementsOnSearchRuleChange = (searchRule: string) => {
  fireEvent.change(usersListSearchInput, { target: { value: searchRule } });

  assignUsersListElements();

  expect(usersListTitle).toBeInTheDocument();
  expect(usersListLoading).not.toBeInTheDocument();
  expect(usersListSearchInput).toBeInTheDocument();
  expect(usersListRefresh).toBeInTheDocument();
  expect(usersListError).not.toBeInTheDocument();
  if (
    usersListFirstUserItem.textContent &&
    usersListFirstUserItem.textContent.includes(searchRule)
  ) {
    expect(usersListFirstUserItem).toBeInTheDocument();
    expect(usersListSecondUserItem).not.toBeInTheDocument();
    expect(usersListEmptyPlaceholder).not.toBeInTheDocument();
  } else if (
    usersListSecondUserItem.textContent &&
    usersListSecondUserItem.textContent.includes(searchRule)
  ) {
    expect(usersListFirstUserItem).not.toBeInTheDocument();
    expect(usersListSecondUserItem).toBeInTheDocument();
    expect(usersListEmptyPlaceholder).not.toBeInTheDocument();
  } else {
    expect(usersListFirstUserItem).not.toBeInTheDocument();
    expect(usersListSecondUserItem).not.toBeInTheDocument();
    expect(usersListEmptyPlaceholder).toBeInTheDocument();
  }
};

const handleValidGetUsersResponse = async () => {
  simulateGetUsersRequest(200, validUsersArray);
  await renderUsersListAndWaitForGetUsersRequest();
  checkUsersListElementsOnValidResponse();
};

describe("UsersList", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("Handle valid GET /users response", async () => {
    await handleValidGetUsersResponse();
  });

  test("Handle empty GET /users response", async () => {
    simulateGetUsersRequest(200, []);
    await renderUsersListAndWaitForGetUsersRequest();
    checkUsersListElementsOnEmptyResponse();
  });

  test("Handle invalid GET /users response", async () => {
    simulateGetUsersRequest(500);
    await renderUsersListAndWaitForGetUsersRequest();
    checkUsersListElementsOnInvalidResponse();
  });

  test("Handle valid GET /users response with invalid users data", async () => {
    simulateGetUsersRequest(200, invalidUsersArray);
    await renderUsersListAndWaitForGetUsersRequest();
    checkUsersListElementsOnEmptyResponse();
  });

  test("Check if 'Refresh list' button works correctly", async () => {
    await handleValidGetUsersResponse();

    simulateGetUsersRequest(500, []);
    fireEvent.click(usersListRefresh);

    await waitForGetUsersRequest();
    checkUsersListElementsOnFirstRender();

    await waitForGetUsersRequest();
    checkUsersListElementsOnInvalidResponse();
  });

  test("Check if searching by names works correctly", async () => {
    await handleValidGetUsersResponse();

    checkUsersListElementsOnSearchRuleChange(firstValidUserItemName);
    checkUsersListElementsOnSearchRuleChange(
      secondValidUserItemName.slice(3, 5)
    );
    checkUsersListElementsOnSearchRuleChange("Wrong user name");
  });
});
